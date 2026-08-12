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
        CharacterDefs charname get exec 
    end
end
} def
/UniqueID 99 def
end
/KugiRegular exch definefont pop
</code>

## Character design

Define the canvas. I use 1000 em as usual in PostScript I choose 500 for x-height (height of lowercase characters), 700 for ascender (cap height) and -200 for descenders.

I kept proportions simple: Most characters like n have the width 500, some smaller like i down to 200, some wider like w, m, M. The width includes thje white space between characters. I decided to left align the characters and not to use the last 100 units on the right. So a 500 width character uses 400 units for the paths.

Start with typical characters like h and g, then design the complicated characters with small inside whitespace (a, e, s). You will spend more time on lowercase characters that define the font than on capitals. This done, design the numbers which are tricky (small whitespace or strange curves in quite all of them). Then move to the accented characters. For caps with accents, you will probably need to design some slightly smaller space. 

Sometimes it is difficult to get it right. Make variants but don't stay too much time on a character. Move to another one and come back later. Always render the characters in different sizes and in context. The design challange is to make characters unique enough that you can recognize them but similar enough that you consider them to be familiar to each other. So the harmony in a text context is essantial.

## Style variation

For **italic**, I first created only oblique fonts. For this, I defined **currentslanted** which the tranpose operator uses to create the deformation. But then, I decided to create a real cursive, so I addded conditional code in some characters (like a, v, w, y) and added swashes to some other lowercase characters (a, b, i, l...). However I did not touch the uppercase characters. The swashes made some character largers. This is something I may change in a next step.

For **smallcaps** I created a separate font that has smaller capital variants for lowercase characters. It has also lowercase numbers.

For **monospace** I created variants for characters that are not 500 width. It helps if there are not too many to do this.

I created also a **stroke** variant for a plotter font. For this, we modify the line, curve and dot operators, so that the stroke a line instead creating an outline.

## Autokern

If you make kerning tables automatically, this is a lot of work. I created operators that analyze the paths of a character and define extrema left and right on top, center and bottom. Using this extrema, you can slide the second character to the first using the maximal white space available for both.

You want to do the kerning only for alphabetical characters. 

## Testing the font

Use it exensively in SQL Notebook, create sample layouts. These are reusable as you redesign the font.

## Epxorting the font

Writing TrueType directly seemed to complicated. I decided to export to SVG fonts and then use a converter to get TrueType font.

I used JavaScript in the SQL Notebook to create a downloadable SVG font. The SQL Notebook **pt3-to-svg-simple.json** is in the source folder. Note that the canvas is now 2048 instead as 1000 units because that is usage for TrueType fonts.

Then I used https://cloudconvert.com/svg-to-ttf to convert the SVG to TrueType. This seems to be the best solution. I tried also to import into FontForge directly, but the program has problems to read the paths that we created.

However, we still need to postprocess the TrueType font. As I explained earlier, the outlines are overlapping particularly with the circles at the end of each segment. This works as long as the font is only used to fill. But if you try to outline it, making a border for subitles for example, you would see the overlapping path.

So we make a roundtrip with **FontForge**. We open the Truetype font, select all glyphs, then we call the menu **Element/Overlap/Remove Overlap**, save the font and then generate the TrueType font, ignoring the warnings.

## State of the project

Version 0.1

This is the first version of the TrueType fonts. The glyphs are not perfect yet, but the font technically works. I will now use it with programs, identify the flaws and correct then the glyphs.








