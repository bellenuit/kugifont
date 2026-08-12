# Kugi font

Kugi font is an experiment to design a Type 3 font in PostScript using SQL Notebook.

![](IMG_7892.PNG?raw=true)
![](IMG_7893.PNG?raw=true)
![](IMG_7894.PNG?raw=true)
![](IMG_7895.PNG?raw=true)
![](IMG_7896.PNG?raw=true)

## Method

We write the characters using a virtual ballpen on paper. The pen has a constant **characterwidth** and is rounded at the end. The characterwidth can be modulated to create font variants (light, regular, bold, black). This works within a certain range, as long as you do not hurt too much inner white spaces. All font wights have the same stirngwidth.

The difficulty of font creation is that the graphic model does not create a stroke but un outline. Keeping lines and curves in sync is a time consuming exercice. For our font which has a constant width, we can automate this process, as we extrude outlines from drawing primitives.

So we create operators
- x y **move** (works like moveto) 
- x y **line** (creates the outline of a line using current **characterwidth** and starting and ending with a circle)
- cx1 cy1 cx2 cy2 x y **curve** (creates an outline of a curve, with a circle at start and end. this was simpler than i thought, within a certain range you can create parallel curves, even if it is a mathematically illusion: you create edge points perpendicular to the control point, then you scale the control points proportionally to the distance of the starting and the ending ppont.)
- a1 a2 x y **turn** (curve was still too work to define the control points. This abstraction creates a curve with a starting and an ending angle - most time multiple of 90 degrees).
- x y **dot** (for the dots, slightly larger than characterwidth)

To take into account the characterwidth, the operator **transpose** moves the points inside depending on the characterwidth.

With this routines in place, a character like **h** is very easy to define 

<code>/h { 0 700 move 0 0 line
0 200 move 
90 0 200 500 turn 
0 270 400 250 turn
400 0 line
fill } def</code>

A Type 3 font is essentially a dictionary 

<code>11 dict dup begin
/FontName (KugiRegilar) def
/FontType 3 def
/FontMatrix [.001 0 0 .001 0 0] def
/FontBBox [0 0 1100 800] def

/Encoding 256 array def
0 1 255 { Encoding exch /.notdef put } for
Encoding
dup ( ) 0 get /space put
dup (!) 0 get /exclam put
...
dup 255 /caron put
pop

/Metrics 512 dict def Metrics begin
/.notdef 0 def
/space 500 def
/exclam 200 def
...
/caron 500 def
end

/BBox 512 dict def BBox begin
/.notdef [0 0 0 0] def
/space [0 0 0 0] def
...
/caron [0 0 400 700] def
end

/CharacterDefs 512 dict def CharacterDefs begin
/.notdef { } def
/space { } def
/exclam { 0 700 move 0 200 line 0 0 dot fill }  def
...
/caron { 100 700 move 200 650 line 300 700 line fill } def
end

% private operators
/move { ... } def
/transpose { ... } def
/line { ... } def
/curve { ... } def
/turn { ... } def

/BuildChar { 5 dict begin
 /char exch def /fontdict exch def 
 /charname fontdict /Encoding get char get def 
   
 fontdict begin 
	 /characterwidth Metrics charname get def  
	 /characterweight 85 def
     Metrics charname get 0 BBox charname get aload pop 
     setcachedevice 
     characterweight 0 eq { /fill { stroke } def } if
     CharacterDefs charname get exec 
 end
 end
 } def
 
 /UniqueID 99 def
end
/KugiRegular exch definefont pop

</code>
