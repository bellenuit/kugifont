rpnOperators.kugifont = function(context) {  

// complete set

var fontvariants = [["Light", 65,0,0,0,0,0,0,1],["Regular",85,0,0,0,0,0,0,2],["Bold",105,0,0,0,0,0,0,3],["Black",125,0,0,0,0,0,0,4],["LightOblique", 65, 0.2,0,0,0,0,0,5],["Oblique",85,0.2,0,0,0,0,0,6],["BoldOblique",105,0.2,0,0,0,0,0,7],["BlackOblique",125,0.2,0,0,0,0,0,8],["Caps",85,0,1,0,0,0,0,9],["Mono",85,0,0,1,0,0,0,10],["Stroke",0,0,0,0,0,0,0,11],["Serif",100,0,0,0,1,0,0,12],["SerifItalic",100,0.2,0,0,1,1,0,13],["SerifBold",140,0,0,0,1,0,0,14],["SerifBoldItalic",140,0.2,0,0,1,1,0,15], ["SerifCaps",100,0,1,0,1,0,0,16],["SansLight",80,0,0,0,0,0,1,17],["Sans",100,0,0,0,0,0,1,18],["SansBold",120,0,0,0,0,0,1,19],["SansBlack",140,0,0,0,0,0,1,20],["SansLightOblique",80,0.2,0,0,0,0,1,21],["SansOblique",100,0.2,0,0,0,0,1,22],["SansBoldOblique",120,0.2,0,0,0,0,1,23],["SansBlackOblique",140,0.2,0,0,0,0,1,24],["SansCaps",100,0,1,0,0,0,1,25]];

// fonts that are not yet Truetype

/* fontvariants = [["LightItalic", 60, 0.2,0,0,5],["BoldItalic",110,0.2,0,0,7],["BlackItalic",135,0.2,0,0,8],["Caps",85,0,1,0,9],["Mono",85,0,0,1,10],["Stroke",0,0,0,0,11]]; */

for(let v of fontvariants) {
	if (v.length !=  9 ) console.log(v);
		
	let [kugivariant, kugiweight, kugislant, kugicaps, kugimono, kugiserif, kugiitalic, kugisans, uniqueid] = v;
	
	let code = `11 dict dup begin

/FontName (Kugi${kugivariant}) def
/CharacterEncoding (MacRoman) def
/FontType 3 def
/FontMatrix [.001 0 0 .001 0 0] def
/FontBBox [0 0 1138 1027] def
/smallcapsfont ${kugicaps} def
/monofont ${kugimono} def
/thick ${kugiweight} def
/thin 25 def
/mediumthick thick thin add 2 div def
/currentslanted ${kugislant} def
/currentserif ${kugiserif} def
/currentitalic ${kugiitalic} def
/currentsans ${kugisans} def

/Encoding 256 array def
0 1 255 { Encoding exch /.notdef put } for
Encoding
dup ( ) 0 get /space put
dup (!) 0 get /exclam put
dup (") 0 get /quotedbl put
dup (#) 0 get /numbersign put
dup ($) 0 get /dollar put
dup (%) 0 get /percent put
dup (') 0 get /quotesingle put
dup 40 /parenleft  put
dup 41 /parenright put
dup (*) 0 get /asterisk put
dup (+) 0 get /plus put
dup (,) 0 get /comma put
dup (-) 0 get /hyphen put
dup (.) 0 get /period put
dup (/) 0 get /slash put
dup (@) 0 get /at put
dup (0) 0 get /zero  put
dup (1) 0 get /one put
dup (2) 0 get /two put
dup (3) 0 get /three  put
dup (4) 0 get /four put
dup (5) 0 get /five put
dup (6) 0 get /six put
dup (7) 0 get /seven put
dup (8) 0 get /eight put
dup (9) 0 get /nine put
dup (:) 0 get /colon put
dup (;) 0 get /semicolon put
dup (<) 0 get /less put
dup (=) 0 get /equal put
dup (>) 0 get /greater put
dup (?) 0 get /question put
dup (&) 0 get /ampersand put
dup (A) 0 get /A put
dup (B) 0 get /B put
dup (C) 0 get /C put
dup (D) 0 get /D put
dup (E) 0 get /E put
dup (F) 0 get /F put
dup (G) 0 get /G put
dup (H) 0 get /H put
dup (I) 0 get /I put
dup (J) 0 get /J put
dup (K) 0 get /K put
dup (L) 0 get /L put
dup (M) 0 get /M put
dup (N) 0 get /N put
dup (O) 0 get /O  put
dup (P) 0 get /P  put
dup (Q) 0 get /Q  put
dup (R) 0 get /R  put
dup (S) 0 get /S  put
dup (T) 0 get /T put
dup (U) 0 get /U put
dup (V) 0 get /V put
dup (W) 0 get /W put
dup (X) 0 get /X put
dup (Y) 0 get /Y put
dup (Z) 0 get /Z put
dup ([) 0 get /bracketleft put
dup 92 /backslash put
dup (]) 0 get /bracketright put
dup (^) 0 get /asciicircum  put
dup (_) 0 get /underscore   put
dup 96 /grave put
dup (a) 0 get /a put
dup (b) 0 get /b put
dup (c) 0 get /c  put
dup (d) 0 get /d  put
dup (e) 0 get /e  put
dup (f) 0 get /f put
dup (g) 0 get /g put
dup (h) 0 get /h put
dup (i) 0 get /i put
dup (j) 0 get /j put
dup (k) 0 get /k put
dup (l) 0 get /l put
dup (m) 0 get /m put
dup (n) 0 get /n put
dup (o) 0 get /o put
dup (p) 0 get /p put
dup (q) 0 get /q put
dup (r) 0 get /r put
dup (s) 0 get /s put
dup (t) 0 get /t put
dup (u) 0 get /u put
dup (v) 0 get /v put
dup (w) 0 get /w put
dup (x) 0 get /x put
dup (y) 0 get /y put
dup (z) 0 get /z put
dup ({) 0 get /braceleft put
dup (|) 0 get /bar put
dup (}) 0 get /braceright put
dup (~) 0 get /asciitilde put
dup 128 /Adieresis put
dup 129 /Aring put
dup 130 /Ccedilla put
dup 131 /Eacute put
dup 132 /Ntilde put
dup 133 /Odieresis put
dup 134 /Udieresis put
dup 135 /aacute put
dup 136 /agrave  put
dup 137 /acircumflex  put
dup 138 /adieresis put
dup 139 /atilde  put
dup 140 /aring put
dup 141 /ccedilla put
dup 142 /eacute put
dup 143 /egrave put
dup 144 /ecircumflex put
dup 145 /edieresis put
dup 146 /iacute put
dup 147 /igrave put
dup 148 /icircumflex  put
dup 149 /idieresis put
dup 150 /ntilde put
dup 151 /oacute put
dup 152 /ograve  put
dup 153 /ocircumflex   put
dup 154 /odieresis put
dup 155 /otilde put
dup 156 /uacute put
dup 157 /ugrave put
dup 158 /ucircumflex put
dup 159 /udieresis  put
dup 160 /dagger put
dup 161 /degree put
dup 162 /cent put
dup 163 /sterling put
dup 164 /section put
dup 165 /bullet put
dup 166 /paragraph put
dup 167 /germandbls put
dup 168 /registered put
dup 169 /copyright put
dup 170 /trademark put
dup 171 /acute put
dup 172 /dieresis put
dup 173 /notequal put
dup 174 /AE put
dup 175 /Oslash  put
dup 176 /infinity put
dup 177 /plusminus put
dup 178 /lessequal put
dup 179 /greaterequal put
dup 180 /yen put
dup 181 /mu put
dup 182 /partialdiff put
dup 183 /summation put
dup 184 /product  put
dup 185 /pi  put
dup 186 /integral put
dup 187 /ordfeminine put
dup 188 /ordmasculine put
dup 189 /uni03A9 put
dup 190 /ae put
dup 191 /oslash  put
dup 192 /questiondown put
dup 193 /exclamdown put
dup 194 /logicalnot put
dup 195 /radical put
dup 196 /florin put
dup 197 /approxequal put
dup 198 /Delta put
dup 199 /guillemotleft put
dup 200 /guillemotright put
dup 201 /elipsis put
dup 202 /uni00A0 put
dup 203 /Agrave put
dup 204 /Atilde put
dup 205 /Otilde put
dup 206 /OE put
dup 207 /oe put
dup 208 /endash put
dup 209 /emdash put
dup 210 /quotedblleft put
dup 211 /quotedblright put
dup 212 /quoteleft put
dup 213 /quoteright put
dup 214 /divide put
dup 215 /lozenge put
dup 216 /ydieresis put
dup 217 /Ydieresis put
dup 218 /fraction put
dup 219 /euro put
dup 220 /quilsinglleft put
dup 221 /quilsinglright  put
dup 222 /uniFB01 put
dup 223 /uniFB02 put
dup 224 /daggerdbl put
dup 225 /periodcentered put
dup 226 /quotesinglbase put
dup 227 /quotedblbase put
dup 228 /perthousand put
dup 229 /Acircumflex  put
dup 230 /Ecircumflex put
dup 231 /Aacute put
dup 232 /Edieresis put
dup 233 /Egrave  put
dup 234 /Iacute put
dup 235 /Icircumflex put
dup 236 /Idieresis put
dup 237 /Igrave  put
dup 238 /Oacute put
dup 239 /Ocircumflex put
dup 240 /uniF8FF put
dup 241 /Ograve  put
dup 242 /Uacute put
dup 243 /Ucircumflex  put
dup 244 /Ugrave put
dup 245 /dotlessi put
dup 246 /circumflex put
dup 247 /tilde put
dup 248 /macron put
dup 249 /breve put
dup 250 /dotaccent put
dup 251 /ring put
dup 252 /cedilla put
dup 253 /hungarumlaut put
dup 254 /ogonek put
dup 255 /caron put

pop

/Metrics 512 dict def Metrics begin
/.notdef 0 def
/space 500 def
/exclam monofont { 500 } { 200 } ifelse def
/quotedbl monofont { 500 } { 300 } ifelse def
/numbersign 500 def
/dollar 500 def
/percent monofont { 500 } { 700 } ifelse def
/ampersand monofont { 500 } { 600 } ifelse def
/quotesingle monofont { 500 } { 200 } ifelse def
/parenleft  monofont { 500 } { 300 } ifelse def
/parenright monofont { 500 } { 300 } ifelse def
/asterisk 500 def
/plus 500 def
/comma monofont { 500 } { 299 } ifelse def
/hyphen 500 def
/period monofont { 500 } { 200 } ifelse def
/slash 500 def
/at monofont { 500 } { 800 }  ifelse def

/zero  500 def 
/one  500 def 
/two  500 def 
/three  500 def 
/four 500 def 
/five 500 def 
/six 500 def 
/seven 500 def 
/eight 500 def 
/nine 500 def 

/colon monofont { 500 } { 200 } ifelse def
/semicolon monofont { 500 } { 200 } ifelse def
/less 500 def
/equal 500 def
/greater 500 def
/question 500 def

/A monofont { 500 } { 600 } ifelse def 
/B monofont { 500 } { 600 } ifelse def 
/C monofont { 500 } { 600 } ifelse def 
/D monofont { 500 } { 600 } ifelse def 
/E monofont { 500 } { 600 } ifelse def 
/F monofont { 500 } { 600 } ifelse def 
/G monofont { 500 } { 600 } ifelse def 
/H monofont { 500 } { 600 } ifelse def 
/I monofont { 500 } { 300 } ifelse def 
/J 500 def 
/K monofont { 500 } { 600 } ifelse def 
/L 500 def
/M monofont { 500 } { 700 } ifelse def
/N monofont { 500 } { 600 } ifelse def
/O monofont { 500 } { 700 } ifelse def
/P monofont { 500 } { 600 } ifelse def

/Q monofont { 500 } { 700 } ifelse def
/R monofont { 500 } { 600 } ifelse def
/S monofont { 500 } { 600 } ifelse def
/T monofont { 500 } { 600 } ifelse def
/U monofont { 500 } { 600 } ifelse def
/V monofont { 500 } { 600 } ifelse def

/W monofont { 500 } { 800 } ifelse def
/X monofont { 500 } { 600 } ifelse def
/Y monofont { 500 } { 600 } ifelse def
/Z monofont { 500 } { 600 } ifelse def

/bracketleft monofont { 500 } { 300 } ifelse def 
/backslash 500 def 
/bracketright monofont { 500 } { 300 } ifelse def 
/asciicircum monofont { 500 } { 300 } ifelse def 
/underscore  500 def
/grave 500 def
/a  500 def
/b  500 def
/c  500 def
/d  500 def
/e  500 def
/f 500 def 
/g 500 def
/h 500 def
/i monofont { 500 } { 300 } ifelse def
/j monofont { 500 } { smallcapsfont { 400 } { 300 } ifelse  } ifelse def
/k 500 def
/l monofont { 500 } { smallcapsfont { 400 } { 300 } ifelse  } ifelse def
/m monofont { 500 } { smallcapsfont { 600 } { 700 } ifelse  } ifelse def
/n 500 def
/o 500 def
/p 500 def
/q 500 def
/r smallcapsfont { 500 } { 400 } ifelse def 
/s 500 def
/t 500 def 
/u 500 def
/v 500 def
/w 700 def 
/x 500 def
/y 500 def
/z 500 def
/braceleft monofont { 500 } { 400 } ifelse def 
/bar monofont { 500 } { 200 } ifelse def 
/braceright monofont { 500 } { 400 } ifelse def 
/asciitilde 500 def
 /Adieresis monofont { 500 } { 600 } ifelse def 
 /Aring monofont { 500 } { 600 } ifelse def 
 /Ccedilla monofont { 500 } { 600 } ifelse def
 /Eacute monofont { 500 } { 600 } ifelse def
 /Ntilde monofont { 500 } { 600 } ifelse def
 /Odieresis monofont { 500 } { 700 } ifelse def
 /Udieresis monofont { 500 } { 600 } ifelse def
 /aacute 500  def
 /agrave 500  def
 /acircumflex 500 def
 /adieresis 500 def  
 /atilde 500 def 
 /aring 500 def  
 /ccedilla 500 def  
 /eacute 500 def 
 /egrave 500 def 
 /ecircumflex 500 def 
 /edieresis 500 def
 /iacute monofont { 500 } { 300 } ifelse def 
 /igrave monofont { 500 } { 300 } ifelse def 
 /icircumflex monofont { 500 } { 300 } ifelse def
 /idieresis monofont { 500 } { 300 } ifelse def
 /ntilde 500 def
 /oacute 500 def
 /ograve 500 def 
 /ocircumflex 500 def 
 /odieresis 500 def 
 /otilde 500 def 
 /uacute 500 def  
 /ugrave 500 def 
 /ucircumflex 500 def 
 /udieresis 500 def 
 
 /dagger 500 def
 /degree 500 def
 /cent 500 def
 /sterling 500 def
 /section 500 def
 /bullet 500 def
 /paragraph 500 def
 /germandbls 500 def
 /copyright monofont { 500 } { 800 } ifelse  def
 /registered monofont { 500 } { 800 } ifelse  def
 /trademark monofont { 500 } { 700 } ifelse  def
 /acute 500 def
 /dieresis 500 def
 /notequal 500 def
 /AE monofont { 500 } { 800 } ifelse   def
 /Oslash monofont { 500 } { 700 } ifelse  def
 /infinity 500 def
 /plusminus 500 def
 /lessequal 500 def
 /greaterequal 500 def
 /yen 500 def
 /mu 500 def
 /partialdiff 500 def
 /summation monofont { 500 } { 600 } ifelse  def
 /product  500 def
 /pi  500 def
 /integral 500 def
 /ordfeminine 500 def
 /ordmasculine 500 def
 /uni03A9 monofont { 500 } { 700 } ifelse def 
 /ae monofont { 500 } { 700 } ifelse def 
 /oslash 500 def
 /questiondown 500 def
  /exclamdown monofont { 500 } { 200 } ifelse def 
 /logicalnot 500 def
 /radical 500 def
 /florin 500 def
 /approxequal 500 def
 /Delta 500 def
 /guillemotleft 500 def
 /guillemotright 500 def
 /elipsis 500 def
 /uni00A0 500 def
 
 /Agrave monofont { 500 } { 600 } ifelse def 
 /Atilde monofont { 500 } { 600 } ifelse def 
 /Otilde monofont { 500 } { 700 } ifelse def 
 
 /OE monofont { 500 } { 800 } ifelse def 
 /oe monofont { 500 } { 700 } ifelse def 
 
 /endash 500 def
 /emdash monofont { 500 } { 700 } ifelse def 
 /quotedblleft 500 def
 /quotedblright 500 def
 /quoteleft 500 def 
 /quoteright 500 def
 /divide 500 def
 /lozenge 500 def
 
 /ydieresis 500 def 
 /Ydieresis monofont { 500 } { 600 } ifelse def 
 
 /fraction 500 def
 /euro monofont { 500 } { 600 } ifelse def 
 /quilsinglleft monofont { 500 } { 200 } ifelse def 
 /quilsinglright monofont { 500 } { 200 } ifelse def 
 /uniFB01 500 def
 /uniFB02 500 def
 /daggerdbl 500 def
 /periodcentered monofont { 500 } { 300 } ifelse  def
 /quotesinglbase monofont { 500 } { 300 } ifelse def 
 /quotedblbase monofont { 500 } { 400 } ifelse def 
 /perthousand monofont { 500 } { 1100 } ifelse def 
 
 /Acircumflex monofont { 500 } { 600 } ifelse def 
 /Ecircumflex monofont { 500 } { 600 } ifelse def 
 /Aacute monofont { 500 } { 600 } ifelse def 
 
 /Edieresis monofont { 500 } { 600 } ifelse def 
 /Egrave monofont { 500 } { 600 } ifelse def 
 
 /Iacute monofont { 500 } { 300 } ifelse def 
 /Icircumflex monofont { 500 } { 300 } ifelse def 
 /Idieresis monofont { 500 } { 300 } ifelse def 
 /Igrave monofont { 500 } { 300 } ifelse def 
 
 /Oacute monofont { 500 } { 700 } ifelse def 
 /Ocircumflex monofont { 500 } { 700 } ifelse def 
 /uniF8FF 500 def
 
 /Ograve monofont  { 500 } { 700 } ifelse def 
 
 /Uacute monofont { 500 } { 600 } ifelse def 
 /Ucircumflex monofont  { 500 } { 600 } ifelse def 
 /Ugrave monofont { 500 } { 600 } ifelse def 
 
 /dotlessi monofont { 500 } { 300 } ifelse def 
 /circumlfex 500 def
 /tilde 500 def
 /macron 500 def
 /breve 500 def
 /dotaccent 500 def
 /ring 500 def
 /cedilla 500 def
 /hungarumlaut 500 def
 /ogonek 500 def
 /caron 500 def

end

/BBox 512 dict def BBox begin
% use only default BBox

end

/CharacterDefs 512 dict def CharacterDefs begin
/.notdef { } def

/space { } def
/exclam { 0 700 move 270 270 0 200 turnsend 0 700 dot  
0 0 dot
}  def
/quotedbl { 0 700 move 270 270 0 550 turnsend 200 700 move 270 270 200 550 turnsend 
0 700 transpose thick 2 div 0 360 arc
200 700 transpose thick 2 div 0 360 arc
}  def
/numbersign { 10 dict begin /thin mediumthick def
25 450 move 425 450 lines 0 200 move 400 200 lines
150 650 move 050 0 lines 350 650 move 250 0 lines
end } def
/dollar { 10 dict begin 
200 700 move 200 0 lines 
400 500 move 90 180 200 600 turns 180 270 0 500 turnsstart
 270 0 200 350 turn 0 270 400 200 turn
 270 180 200 100 turnsend 180 90 0 200 turns
end }  def

/percent { 10 dict begin monofont { 400 600 div 700 700 div compscale } if
600 700 move 0 0 lines
250 575 move 90 180 125 700 turnsend 180 270 0 575 turnsstart
270 0 125 450 turnsend 0 90 250 575 turnsstart
350 125 move 90 0 475 250 turnsend 0 270 600 125 turnsstart
270 180 475 0 turnsend 180 90 350 125 turnsstart
end }  def
/ampersand { 10 dict begin monofont { 500 600 div 700 700 div compscale } if
500 200 move 225 180 250 0 turns
180 90 0 200 turnsstart 90 45 200 400 turnsend 
45 90 325 550 turnsstart
90 180 200 700 turnsend
180 270 100 550  turnsstart
270 315 250 250 turn 500 0 line
end}  def
/quotesingle { 0 700 move 270 270 0 550 turnsend 
0 700 transpose thick 2 div 0 360 arc
fill}  def
/parenleft  { 200 700 move 210 270 0 300 turnsstart 270 330 200 -100 turnsend } def
/parenright { 0 700 move 330 270 200 300 turnsstart 270 210 0 -100 turnsend } def
/asterisk { 10 dict begin /thin mediumthick def 
0 300 move 400 300 lines
100 472 move 300 128 lines
300 472 move 100 128 lines
end }  def

/plus { 10 dict begin /thin mediumthick def 
0 350 move 400 350 lines 200 550 move 200 150 lines fill
end }  def
/comma { 
0 0 move 270 240 -100 -150 turnsstart 
0 0 transpose thick 2 div 0 360 arc
}  def
/hyphen { 10 dict begin /thin mediumthick def 
0 350 move 200 350 lines 
end } def
/period { 0 0 dot } def
/slash { 10 dict begin /thin mediumthick def 
0 0 move 400 700 lines 
end } def



/zero  {  
smallcapsfont {
200 500 move 
180 270 0 250 turnsstart 
270 0 200 0 turnsend
0 90 400 250 turnsstart
90 180 200 500 turnsend
} { 
200 720 move 
180 270 0 350 turnsstart 
270 0 200 -20 turnsend
0 90 400 350 turnsstart
90 180 200 720 turnsend
} ifelse
} def


/one  { 
smallcapsfont {
thin thick 100 350 400 500 400 0 corner
270 400 0 hserif
} { 
monofont { 
0 500 move 300 700 line 300 0 line
200 0 move 400 0 line
} {	
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def  } if
thin thick 50 500 350 700 350 0 corner
90 350 0 hserif
} ifelse 
} ifelse } def


/two  {  
smallcapsfont { 
0 350 move 90 0 200 500 turns
0 270 400 350 turnsstart
270 225 200 0 turnsend
thin thick 200 0 0 -200 400 -200 corner
} {
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def  } if
0 550 move 90 0 200 720 turns
0 270 400 550 turnsstart 
270 225 200 200 turnsend
thin thin 200 200 0 0 400 0 corner
0 400 0 vtserif
} ifelse } def


/three  { 
smallcapsfont {
0 350 move 90 0 200 500 turns
0 270 400 325 turnsstart 
270 180 200 150 turnsend
0 270 400 -25 turnsstart 
270 180 200 -200 turnsend
180 90 0 -50 turns
} {
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def  } if
0 550 move 90 0 200 720 turns
0 270 400 525 turnsstart 
270 180 200 350 turnsend
0 270 400 175 turnsstart
270 180 200 -20 turnsend
180 90 0 150 turns
} ifelse } def


/four { 
smallcapsfont {
thin thick 300 500 0 0 400 0 corner
thin thick 0 0 300 500 300 -200 corner
270 300 -200 hserif	
} {	
	currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def  } if
thin thin 300 700 0 300 400 300 corner
thin thick 0 300 300 700 300 0 corner
270 300 0 hserif
} ifelse } def

/five {  
smallcapsfont {
thick thin 400 500 0 500 0 200 corner
thin thin 0 500 0 200 200 200 corner
200 200 move 0 270 400 0 turnsstart
270 180 200 -200 turnsend
180 150 0 -150 turns 
} {
		currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def  } if

thick thin 400 700 0 700 0 400 corner
thin thin 0 700 0 400 200 400 corner
200 400 move 0 270 400 200 turnsstart
270 180 200 0 turnsend
180 150 0 50 turns 
} ifelse } def

/six { 10 dict begin
smallcapsfont {  10 dict begin
/tangentx 135 cos 200 mul 200 add def
/tangenty 135 sin 250 mul 250 add def
tangentx 300 add tangenty 375 add move
currentserif { 225 270 0 250 turnsstart } { tangentx tangenty lines } ifelse
end
0 250 move
270 0 200 0 turnsend
0 90 400 250 turnsstart 
90 180 200 500 turnsend
180 270 0 250 turnsstart 	
} {
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def  } if

400 550 move 90 180 200 720 turns
180 270 0 400 turnsstart 0 200 line
270 0 200 -20 turnsend
0 90 400 200 turnsstart 
90 180 200 400 turnsend
180 270 0 200 turnsstart 
} ifelse end } def


/seven {  
smallcapsfont { thick thin 0 500 400 500 100 -200 corner }
{
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def  } if
thick thin 0 700 400 700 100 0 corner } ifelse
} def

/eight {  
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def  } if
200 380 move 0 90 375 540 turns
90 180 200 720 turns
180 270 25 540 turnsstart
270 0 200 380 turn
0 270 400 190 turn
270 180 200 -20 turnsend 
180 90 0 190 turns 
90 0 200 380 turns
} def


/nine {  
smallcapsfont {
400 250 move
90 180 200 500 turnsend
180 270 0 250 turnsstart
270 0 200 0 turnsend
0 90 400 250 turnsstart
10 dict begin
/tangentx 315 cos 200 mul 200 add def
/tangenty 315 sin 250 mul 250 add def
tangentx 300 sub tangenty 375 sub move
currentserif { 45 90 400 250 turnsstart } { tangentx tangenty lines } ifelse
end
} {
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def  } if
400 500 move
90 180 200 720 turnsend
180 270 0 500 turnsstart
270 0 200 300 turnsend
0 90 400 500 turnsstart
400 300 line
270 180 200 -20 turnsend
180 90 0 150 turns
} ifelse } def


/colon { 0 0 dot 0 300 dot }  def
/semicolon { 0 0 move 270 240 -100 -150 turnsend 
0 0 transpose thick 2 div 0 360 arc
0 300 dot
fill} def
/less { 10 dict begin /thin mediumthick def 
400 450 move 0 350 lines 400 250 lines fill
end } def

/equal { 10 dict begin /thin mediumthick def 
0 450 move 400 450 lines 0 250 move 400 250 lines 
end}  def
/greater { 10 dict begin /thin mediumthick def 
0 450 move 400 350 lines 0 250 lines end }  def
/question { 0 600 move 45 0 200 700 turns 0 270 400 600 turnsstart
270 210 300 450 turnsend
210 270 200 300 turns  270 270 200 150 turns
200 0 dot
fill}  def
/at { monofont { 500 700 div 1 compscale } if 10 dict begin /thick thick 110 min def
500 350 move 
90 180 325 550 turnsend
180 270 150 350 turnsstart
270 0 325 150 turnsend
0 90 500 350 turnsstart
500 500 move 
500 300 line
270 0 600 150 turnsend
0 90 700 300 turns
90 180 350 720 turns
180 270 0 350 turns
270 0 350 -20 turns
0 30 500 25 turns 
end}  def


/A { 10 dict begin /propwidth 600 def 
currentserif { /leftbearing 25 def /rightbearing 50 def } if
250 0.3 mul 
700 0.3 mul move 
250 0.3 mul neg 500 add 
700 0.3 mul lines 
thin thick 500 currentsans { thin } { 1 } ifelse sub 0 500 0 375 350 corner
thick thin 500 0 250 700 0 0 cornercapped
thin thin 125 350 0 0 currentsans { thin 2 div  } { 1 } ifelse 0 corner

-700 -250 atan 0 0 hserif -700 250 atan 500 0 hserif 
end } def

/B { 10 dict begin /propwidth 600 def
currentserif { /leftbearing 25 def } if
thick thin 0 350 0 700 300 700 corner
thick thin 0 350 0 0 300 0 corner 
300 700 move 0 270 450 550 turnsstart
270 180 300 400 turnsend 0 400 lines
300 400 move 0 270 500 200 turnsstart 270 180 300 0 turnsend 0 0 lines
90 0 700 hlserif 270 0 0 hrserif
end} def

/C { 10 dict begin /propwidth 600 def 
currentserif { /rightbearing -25 def } if
500 550 move 
90 180 250 720 turns 180 270 0 350 turnsstart
270 0 250 -20 turnsend  
0 90 500 150 turns
0 500 600 vserif
end} def

/D { 10 dict begin  /propwidth 600 def
currentserif { /leftbearing 25 def } if
thick thin 0 350 0 700 200 700 corner
thick thin 0 350 0 0 200 0 corner
200 700 move 0 270 500 425 turnsstart
500 275 line 270 180 200 0 turnsend
0 0 lines 
90 0 700 hlserif 270 0 0 hrserif
end } def

/E { 10 dict begin /propwidth 600 def
currentserif { /leftbearing 25 def /rightbearing -25 def } if
thick thin 0 350 0 700 500 700 corner
thick thin 0 350 0 0 500 0 corner
0 350 move 350 350 lines
90 0 700 hlserif 270 0 0 hrserif 0 350 350 vserif 0 500 700 vbserif 0 500 0 vtserif
end } def

/F { 10 dict begin /propwidth 600 def
currentserif { /leftbearing 25 def /rightbearing -25 def } if
thick thin 0 0 0 700 500 700 corner
thick thin 0 350 0 0 currentsans { thick 2 div } { 1 } ifelse 0 corner
0 350 move 350 350 lines
270 0 0 hserif 90 0 700 hlserif 0 500 700 vbserif 0 350 350 vserif
end } def

/G { 10 dict begin /propwidth 600 def
currentserif { /leftbearing -25 def  /rightbearing 25 def } if
500 550 move
90 180 250 720 turns
180 270 0 350 turnsstart
270 0 250 -20 turnsend
0 90 500 250 turnsstart
500 300 line
currentserif { 90 500 300 hserif } { thick thin 500 290 500 300 300 300 corner } ifelse
0 500 600 vserif
end } def

/H { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def /propwidth 600 def
currentserif { /leftbearing 25 def /rightbearing 40 def} if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
0 700 move 0 0 line
500 700 move 500 0 line
0 350 move 500 350 lines
90 0 700 hserif 90 500 700 hserif 270 0 0 hserif 270 500 0 hserif
end } def

/I { 10 dict begin
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
monofont { 
200 700 move 200 0 line
0 700 move 400 700 line
0 0 move 400 0 line
} {
/rightbearing 50 def
currentserif { /leftbearing -25 def /rightbearing 125 def} if
0 700 move 0 0 line
90 0 700 hserif 270 0 0 hserif
} ifelse
end } def

/J { 10 dict begin 
currentserif { /leftbearing 25 def /rightbearing 50 def} if 
400 700 move 400 200 line 
270 180 200 0 turnsend
180 90 0 175 turnsstart
90 400 700 hserif
90 0 175 hserif
end } def


/K { 10 dict begin /propwidth 600 def
currentserif { /leftbearing 25 def /rightbearing 25 def} if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
0 700 move 0 0 line
0 350 move 500 700 lines
/x1 200 def
/y1 350 200 mul 500 div 350 add def
thick thin x1 y1 500 0 500 currentsans { thick 2 div } { 1 } ifelse add 0 corner
90 0 700 hserif 270 0 0 hserif y1 neg 500 x1 sub atan 500 0 hserif 350 500 atan 500 700 hserif
end } def

/L { 10 dict begin  
currentserif { /leftbearing 25 def /rightbearing 0 def } if
thick thin 0 700 0 0 400 0 corner
90 0 700 hserif 270 0 0 hrserif 0 400 0 vtserif
end } def

/M { 10 dict begin /propwidth 700 def
currentserif { /leftbearing 25 def /rightbearing 40 def} if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
0 0 move 0 700 lines
600 0 move 600 700 line
currentserif currentsans or {
	0 700 move 
	thick thin 150 thick 4 div add 475 0 thick 2 div add 700 0 700 corner
	thick thin 150 thick 4 div add 475 300 250 450 thick 4 div sub 475 corner
	thin thin 600 700 600 thick 2 div sub 700 450 thick 4 div sub 475 corner
	90 0 700 hlserif 270 0 0 hserif 90 600 700 hrserif 270 600 0 hserif	
} {
0 700 move
300 250 line
600 700 line
} ifelse

end } def


/N { 10 dict begin  /propwidth 600 def
currentserif { /leftbearing 25 def /rightbearing 25 def } if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
0 0 move 0 700 lines
500 0 move 500 700 lines
thin thick -1 700 0 700 250 350 corner
thin thick 500 350 500 0 250 350 cornercapped
270 0 0 hserif 90 0 700 hserif 90 500 700 hserif
end } def

/O  { 10 dict begin /propwidth 700 def
currentserif { /leftbearing -25 def /rightbearing -25 def } if
300 720 move 
180 270 0 350 turnsstart
270 0 300 -20 turnsend
0 90 600 350 turnsstart
90 180 300 720 turnsend
end } def

/P  { 10 dict begin /hasleftserif 1 def /propwidth 600 def
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
currentserif { /leftbearing 25 def /rightbearing 0 def} if
thick thin 0 0 0 700 300 700 corner 
300 700 move
0 270 500 525 turnsstart
270 180 300 350 turnsend
0 350 lines
270 0 0 hserif 90 0 700 hlserif
end } def

/Q  { 10 dict begin /propwidth 700 def 
currentserif { /leftbearing -25 def /rightbearing -15 def } if
300 720 move 
180 270 0 350 turnsstart 
270 0 300 -20 turnsend
0 90 600 350 turnsstart
90 180 300 720 turnsend
currentserif {
	300 0 move 270 0 600 -200 turnsend
} {
400 200 move 600 0 lines
} ifelse
end } def

/R { 10 dict begin /propwidth 600 def
currentserif { /leftbearing 25 def /rightbearing 40 def} if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
thick thin 0 0 0 700 250 700 corner 
250 700 move
0 270 500 525 turnsstart
270 180 250 350 turnsend 
0 350 lines
thin thick 249 350 250 350 375 175 corner
thick thin 375 175 500 0 501 0 corner
270 0 0 hserif 90 0 700 hlserif -350 250 atan 500 0 hlserif 
end } def

/S  { 10 dict begin /propwidth 600 def
currentserif { /leftbearing -60 def /rightbearing -60 def} if
500 525 move 
90 180 250 720 turns
180 270 0 currentserif currentsans or { thick 2 div add } if 525 turnsstart 
270 0 250 370 turn % 260 370 lines
0 270 500 currentserif currentsans or { thick 2 div sub } if 175 turn
270 180 250 -20 turnsend
180 90 0 175 turns 
180 0 125 vserif 0 500 600 vserif
end } def

/T { 10 dict begin /propwidth 600 def
currentserif { /leftbearing -50 def /rightbearing -40 def} if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
0 700 move 500 700 lines
thick thin 250 700 250 0 251 0 corner
180 0 700 vbserif 0 500 700 vbserif 270 250 0 hserif 
end } def 

/U { 10 dict begin /propwidth 600 def
currentserif { /leftbearing 25 def /rightbearing 40 def} if
0 700 move 0 250 line
270 0 250 -20 turnsend
0 90 500 250 turns
500 700 lines
90 0 700 hserif 90 500 700 hsserif
end } def 

/V { 10 dict begin  /propwidth 600 def
currentserif { /leftbearing 25 def /rightbearing 40 def} if
thin thick -1 700 0 700 125 350 corner
thick thin 125 350 250 0 375 350 cornercapped
thin thin 375 350 500 700 501 700 corner
700 -250 atan 0 700 hserif 700 250 atan 500 700 hsserif 
end } def 

/W { 10 dict begin  /propwidth 800 def
currentserif { /leftbearing 25 def /rightbearing 40 def} if
thin thick -1 700 0 700 100 350 corner
thick thin 100 350 200 0 305 350 cornercapped
thin thick 275 250 350 500 425 250 corner
thick thin 395 350 500 0 600 350 cornercapped
thin thin 600 350 700 700 701 700 corner
700 -200 atan 0 700 hserif 700 200 atan 700 700 hsserif
end } def 

/X { 10 dict begin /propwidth 600 def
currentserif { /leftbearing 25 def /rightbearing 40 def} if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
thin thick -1 700 0 700 250 350 corner
thick thin 250 350 500 0 501 0 corner
thin thin -1 0 0 0 250 350 corner
thin thin 250 350 500 700 501 700 corner
700 -500 atan 0 700 hserif -700 500 atan 500 0 hserif 
-700 -500 atan 0 0 hsserif 700 500 atan 500 700 hsserif
end } def 

/Y { 10 dict begin /propwidth 600 def
currentserif { /leftbearing 25 def /rightbearing 40 def} if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
thin thick -1 700 0 700 250 300 corner
thick thick 125 500 250 300 250 0 corner
thin thin 250 currentserif { thick 2 div add } if 300 500 700 501 700 corner
400 -250 atan 0 700 hserif 400 250 atan 500 700 hsserif  270 250 0 hserif  
end } def 

/Z { 10 dict begin /propwidth 600 def
0 700 move 250 700 lines
thin thick 250 700 500 700 250 350 corner
thick thin 250 350 0 0 250 0 corner
250 0 move 500 0 lines
180 0 700 vbserif 0 500 0 vtserif 
end } def


/bracketleft { thin thick 200 700 0 700 0 300 corner 
thick thin 0 300 0 -100 200 -100 corner }  def
/backslash  { 10 dict begin /thin mediumthick def  0 700 move 400 0 lines end } def
/bracketright  { thin thick 0 700 200 700 200 300 corner 
thick thin 200 300 200 -100 0 -100 corner } def
/asciicircum  { 10 dict begin /thin mediumthick def  thin thin 50 650  200 700  350 650 corner end } def
/underscore    { 10 dict begin /thin mediumthick def  0 0 move 500 0 lines end } def
/grave  { 10 dict begin /thin mediumthick def  50 700 move 350 650 lines end  } def

/a { 10 dict begin 
currentserif { /leftbearing -25 def /rightbearing 25 def} if
currentitalic { /rightbearing 50 def} if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /A get exec  } {
currentitalic { 400 350 move 400 75 line 400 0 endswash
400 350 move 
90 180 200 500 turnsend
180 270 0 200 turnsstart
270 0 200 0 turnsend
0 90 400 200 turns }	
{ 400 350 move
270 180 200 250 turnsend
180 270 0 125 turnsstart
 270 0 250 0 turnsend
0 30 400 50 turns
currentserif { 0 } { 50 } ifelse 450 move
30 0 200 500 turns
% 200 500 line
0 270 400 350 turnsstart 
400 0 line
270 400 0 hlserif
 } ifelse
} ifelse end } def

/b  { 10 dict begin 
currentserif { /leftbearing 25 def} if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /B get exec } {
0 700 move
currentserif { 0 150 line 270 0 200 0 turnsend } { 0 0 line 0 250 move 270 0 200 0 turnsend } ifelse
0 90 400 250 turnsstart
90 180 200 500 turnsend
180 270 0 250 turnsstart
90 0 700 hlserif  
} ifelse end } def

/c  { 
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /C get exec  } {
currentserif { /leftbearing -10 def /rightbearing -40 def } if
400 375 move
90 180 200 500 turns
180 270 0 250 turnsstart
270 0 200 0 turnsend
0 90 400 125 turns
} ifelse } def
 
/d { 10 dict begin 
currentserif { /leftbearing -10 def /rightbearing 40 def} if
currentitalic { /rightbearing 50 def} if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /D get exec } {
400 700 move  
currentitalic { 400 75 line 400 0 endswash } { 400 0 line  270 400 0 hlserif} ifelse
400 350 move 
90 180 200 500 turnsend
180 270 0 250 turnsstart
270 0 200 0 turnsend
0 90 400 250 turnsstart
90 400 700 hlserif 
} ifelse end } def

/e  { 
currentitalic { /rightbearing 10 def} if
currentsans { /bottombearing thick 2 div neg def /topbearing thick 2 div neg def  } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /E get exec  } {
thin thick 0 250 400 250 400 251 corner
400 250 move 
90 180 200 500 turnsend
180 270 0 250 turnsstart
270 0 200 0 turnsend
0 30 400 50 turns
} ifelse } def

/f { 10 dict begin /propwidth 400 def
currentserif { /leftbearing -75 def /rightbearing -75 def } if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /F get exec  } {
400 670 move 150 180 250 700 turns
180 270 100 550 turnsstart
currentslanted { 100 -50 line 270 180 -50 -200 turnsend } { 100 0 line  270 100 0 hserif } ifelse
0 400 move 300 400 lines
} ifelse end } def

/g { 10 dict begin 
currentserif { /leftbearing -10 def /rightbearing 40 def } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /G get exec  } {
400 250 move 
90 180 200 500 turnsend
180 270 0 250 turnsstart
270 0 200 0 turnsend 
0 90 400 250 turns
400 500 move 400 -50 line 
270 180 200 -200 turnsend
180 150 0 -150 turns 
90 400 500 hrserif
} ifelse end } def

/h { 10 dict begin 
currentserif { /leftbearing 25 def /rightbearing 40 def } if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
currentitalic { /rightbearing 50 def  } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /H get exec  } {
0 700 move 0 0 line
0 200 move 
90 0 220 500 turns 0 270 400 250 turnsstart
currentitalic { 400 75 line 400 0 endswash } { 400 0 line 270 400 0 hserif } ifelse
90 0 700 hlserif 270 0 0 hserif  
} ifelse end } def

/i { 10 dict begin  /propwidth 300 def
currentserif { /leftbearing 25 def /rightbearing 10 def } if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
currentserif smallcapsfont and { /leftbearing 100 def } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /I get exec  } {
monofont {
	125 0 move 125 500 line
	50 0 move 200 0 line
	50 500 move 125 500 line
	125 700 dot
}
{
currentitalic { 0 500 move 0 75 line 0 0 endswash 0 currentsans currentserif or { 600 } { 650 } ifelse  thick 2 div add dot }
{ 50 500 move 50 0 line 50 currentsans currentserif or { 600 } { 650 } ifelse thick 2 div add dot 90 50 500 hlserif 270 50 0 hsserif  } ifelse 
90 0 500 hlserif 
} ifelse
} ifelse end } def

/j { 10 dict begin /propwidth 300 def
currentserif { /leftbearing -50 def /rightbearing 25 def } if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
currentserif smallcapsfont and { /leftbearing 0 def /rightbearing 10 def } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /J get exec  } {
200 500 move
200 0 line 
270 180 50 -150 turnsend
monofont { 50 -150 lines } { 0 -150 lines } ifelse
200 currentsans currentserif or { 600 } { 650 } ifelse  thick 2 div add dot
90 200 500 hlserif
} ifelse end } def

/k { 10 dict begin 
currentserif { /leftbearing 25 def /rightbearing 40 def } if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
currentitalic { /rightbearing 50 def  } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /K get exec  } {
0 700 move 0 0 line
0 250 move 400 500 lines
100 250 200 100 mul 350 div add move
400 0 line 
90 0 700 hlserif 270 0 0 hserif 270 400 0 hserif 90 400 500 hserif
} ifelse end  } def

/l { 10 dict begin /propwidth 300 def
currentserif { /leftbearing 25 def /rightbearing 0 def } if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
currentserif smallcapsfont and { /leftbearing 0 def /rightbearing 10 def } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /L get exec  } {
monofont {
	75 0 move 75 700 line
	0 0 move 150 0 line
	0 700 move 75 700 line
}
{ 0 700 move currentitalic { 0 75 line 0 0 endswash } { 0 0 line 270 0 0 hserif } ifelse
90 0 700 hlserif } ifelse
} ifelse end  } def

/m { 10 dict begin /propwidth 700 def /hasendswash 1 def
currentserif { /leftbearing 25 def /rightbearing 50 def } if
currentitalic { /rightbearing 50 def} if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /M get exec  } {
0 500 move 0 0 line
0 300 move 90 0 150 500 turns 0 270 300 350 turnsstart 300 0 line
300 300 move 90 0 450 500 turns 0 270 600 350 turnsstart  currentitalic { 600 75 line 600 0 endswash } { 600 0 line 270 600 0 hserif } ifelse 
90 0 500 hlserif 
270 0 0  hserif 
270 300 0 hserif 
} ifelse end } def


/n { 10 dict begin 
currentserif { /leftbearing 25 def /rightbearing 50 def } if
currentitalic { /rightbearing 50 def} if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /N get exec  } {
0 500 move 0 0 line
0 200 move 90 0 220 500 turns 0 270 400 350 turnsstart 
currentitalic { 400 75 line 400 0 endswash } { 400 0 line 270 400 0 hsserif  } ifelse 
90 0 500 hlserif 270 0 0 hsserif 
} ifelse end } def

/o { smallcapsfont { 400 500 div 500 700 div compscale CharacterDefs /O get exec  1 1 compscale } {
currentserif smallcapsfont and { /leftbearing -10 def /rightbearing 10 def } if
200 500 move 
180 270 0 250 turnsstart
270 0 200 0 turnsend
0 90 400 250 turnsstart
90 180 200 500 turnsend
} ifelse } def

/p { 10 dict begin 
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /P get exec  } {
0 500 move 0 -200 line
0 200 move 
90 0 200 500 turns
0 270 400 250 turnsstart
270 180 200 0 turnsend
180 90 0 250 turns
90 0 500 hlserif 270 0 -200 hserif
} ifelse end } def

/q { 10 dict begin 
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /Q get exec  } {
currentserif { /leftbearing -10 def } if	
400 500 move 400 -200 line
400 350 move 
90 180 200 500 turns
180 270 0 250 turnsstart
270 0 200 0 turnsend
0 90 400 250 turns
90 400 500 hrserif 270 400 -200 hserif
} ifelse end } def



/r { 10 dict begin /propwidth 400 def
currentserif { /leftbearing 25 def /rightbearing -50 def } if
currentsans { /bottombearing thick 4 div neg def /topbearing thick 4 div neg def } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /R get exec  } {
0 500 move 0 0 line

300 470 move 150 180 150 500 turns
180 270 0 350 turnsstart

% 0 250 move 90 0 250 500 turnsend 300 thick 2 div add 500 lines
90 0 500 hlserif 270 0 0 hsserif
} ifelse end } def


/s { smallcapsfont { 400 500 div 500 700 div compscale CharacterDefs /S get exec  } {
currentserif { /leftbearing -50 def /rightbearing -50 def } if
400 400 move
120 180 200 500 turns
180 270 0 currentserif currentsans or { thick 2 div add } if 375 turnsstart
270 0 200 250 turn % 240 250 line
0 270 400 currentserif currentsans or { thick 2 div sub } if 125 turn
270 180 200 0 turnsend
180 120 0 100 turns
180 0 75 vserif 0 400 425 vserif
} ifelse } def

/t {  10 dict begin 
currentserif { /leftbearing -40 def /rightbearing -25 def } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /T get exec  } {
100 700 move 100 150 line 
270 0 250 0 turnsend 0 90 400 150 turns 
0 450 move 300 450 lines 
90 100 700 hlserif
} ifelse end } def

/u { 10 dict begin 
currentserif  { /leftbearing 25 def /rightbearing 40 def } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /U get exec  } {
0 500 move 0 200 line
270 0 200 0 turnsend 0 90 400 200 turns 
currentitalic { thin thick 399 500 400 500 400 75 corner 400 0 endswash } { 400 500 move 400 0 line 270 400 0 hlserif } ifelse 
90 400 500 hlserif 
90 0 500 hlserif 
} ifelse end } def

/v { 10 dict begin 
currentserif  { /leftbearing 25 def /rightbearing 40 def } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /V get exec  } {
thin thick -1 500 0 500 100 250 corner
thick thin 100 250 200 0 currentitalic { 350 } { 300 } ifelse 250 cornercapped
currentitalic { 350 250 move 500 150 atan 90 400 500 turns } { thin thin 300 250 400 500 401 500 corner } ifelse 
90 0 500 hserif 90 400 500 hserif
} ifelse end } def 

/w { 10 dict begin /propwidth 700 def
currentserif  { /leftbearing 25 def /rightbearing 40 def } if

smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /W get exec  } {
thin thick -1 500 0 500 75 250 corner
thick thin 75 250 150 0 225 250 cornercapped
thin thick 225 250 300 500 375 250 cornercapped
thick thin 375 250 450 0 currentitalic { 575 } { 525 } ifelse 250 cornercapped
currentitalic { 575 250 move 500 150 atan 90 600 500 turns } { thin thin 525 250 600 500 601 500 corner } ifelse
90 0 500 hserif 90 600 500 hserif
} ifelse end } def


/x { 10 dict begin 
currentserif  { /leftbearing 25 def /rightbearing 40 def } if

smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /X get exec  } {
thin thick -1 500 0 500 200 250 corner
thick thin 200 250 400 0 401 0 corner
thin thin -1 0 0 0 200 250 corner
thin thin 200 250 400 500 401 500 corner
90 0 500 hserif 90 400 500 hserif 270 0 0 hserif 270 400 0 hserif
} ifelse end } def

/y { 10 dict begin 
currentserif  { /leftbearing 25 def /rightbearing 40 def } if
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /Y get exec  } {
thin thick -1 500 0 500 100 250 corner
thick thin 100 250 200 0 currentslanted { 350 } { 300 } ifelse 250 corner
currentslanted { 350 250 move 500 150 atan 90 400 500 turns  } { thin thin 300 250 400 500 401 500 corner } ifelse
90 0 500 hserif 90 400 500 hserif
200 0 move -250 -120 atan 180 0 -200 turns
} ifelse end } def

/z { 
smallcapsfont {	400 500 div 500 700 div compscale CharacterDefs /Z get exec  } {
thin thick 0 500 400 500 200 250 corner
thick thin 200 250 0 0 400 0 corner 
180 0 500 vbserif 0 400 0 vtserif	
} ifelse } def

/braceleft  { 300 700 move 180 270 150 600 turnsstart 150 400 line 270 180 0 300 turnsend
0 270 150 200 turnsstart 150 0 line 270 0 300 -100 turnsend
} def
/bar { 10 dict begin /thin mediumthick def  0 700 move 0 -100 lines end} def
/braceright  { 0 700 move 0 270 150 600 turnsstart 150 400 line 270 0 300 300 turnsend
180 270 150 200 turnsstart 150 0 line 270 180 0 -100 turnsend
} def
/asciitilde  { 10 dict begin /thin mediumthick def  0 350 move 45 0 100 400 turns 0 315 200 350 turns 315 0 300 300 turns 0 45 400 350 turns
end } def

/minacute {  10 dict begin /characterwidth 500 def 1 1 compscale currentserif {50} {100} ifelse 650 move currentserif {350} {300} ifelse 700 lines end } def

/capacute { 
10 dict begin 
monofont { /characterwidth 500 def 100 750 move 300 800 lines  } 
{ /characterwidth 600 def currentserif {100} {150} ifelse 750 move currentserif {400} {350} ifelse 800 lines } ifelse
end } def

/mingrave {  10 dict begin /characterwidth 500 def 1 1 compscale currentserif {50} {100} ifelse 700 move currentserif {350} {300} ifelse 650 lines end } def

/capgrave { 
10 dict begin 
monofont { /characterwidth 500 def 100 800 move 300 750 lines  } 
{ /characterwidth 600 def currentserif {100} {150} ifelse 800 move currentserif {400} {350} ifelse 750 lines } ifelse
end } def

/mincirc {  10 dict begin /characterwidth 500 def 1 1 compscale currentserif {50 600} {100 650} ifelse move 200 700 lines currentserif {350 600} {300 650} ifelse lines end } def

/capcirc { 
10 dict begin 
monofont { /characterwidth 500 def 100 750 move 200 800 lines 300 750 lines  } 
{ /characterwidth 600 def currentserif {100} {150} ifelse 750 move 250 800 lines currentserif {400} {350} ifelse 750 lines } ifelse
end } def

/minumlaut { 10 dict begin /characterwidth 500 def 1 1 compscale 100 currentserif { 450 } { 500 } ifelse thick 2 mul add  dot 300 currentserif { 450 } { 500 } ifelse thick 2 mul add  dot end } def

/capumlaut { 0 dict begin 
monofont { /characterwidth 500 def 100 650 thick 2 mul add dot 300 650 thick 2 mul add  dot end } 
{ /characterwidth 600 def 150 currentserif { 550 } { 650 } ifelse thick 2 mul add dot 350 currentserif { 550 } { 650 } ifelse thick 2 mul add  dot end } ifelse } def

/mincedille { /characterwidth 500 def 200 0 move 200 -75 lines 0 270 300 -145 turns 270 180 200 -175 turns } def
/capcedille { /characterwidth 600 def 250  -20 move 250 -75 lines 0 270 350 -145 turns 270 180 250 -175 turns } def

/mintilde  { /characterwidth 500 def 0 675 move 45 0 100 725 turns 0 315 200 675 turns 315 0 300 625 turns 0 45 400 675 turns 
} def
/captilde { 
monofont { /characterwidth 500 def 0 750 move 45 0 100 800 turn 0 315 200 750 turn 315 0 300 700 turn 0 45 400 750 turn }
{ /characterwidth 600 def 50 750 move 45 0 150 800 turns 0 315 250 750 turns 315 0 350 700 turns 0 45 450 750 turns  } ifelse
} def


 /Aacute { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 CharacterDefs /capacute get exec
 500 500 div 650 700 div compscale 
 CharacterDefs /A get exec 
 end } def
 
 /Agrave { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 CharacterDefs /capgrave get exec
 500 500 div 650 700 div compscale 
 CharacterDefs /A get exec 
 end } def

 /Acircumflex { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 CharacterDefs /capcirc get exec
 500 500 div 650 700 div compscale 
 CharacterDefs /A get exec 
 end } def

 /Adieresis { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 CharacterDefs /capumlaut get exec
 500 500 div 650 700 div compscale 
 CharacterDefs /A get exec 
 end } def
 
 /Atilde { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 CharacterDefs /captilde get exec
 500 500 div 650 700 div compscale 
 CharacterDefs /A get exec 
 end } def

 /Aring {  10 dict begin /hasleftserif 1 def /hasrightserif 1 def 
 monofont { -50 0 translate} if 
 250 800 move 180 270 150 700 turns 270 0 250 600 turns 0 90 350 700 turns 90 180 250 800 turns
 monofont { 50 0 translate} if 
 500 500 div 600 700 div compscale 
 CharacterDefs /A get exec  end  } def

 /AE { 10 dict begin monofont { 400 700 div 1 compscale } if  0 0 move 250 700 lines 350 700 lines thick thin 350 700 350 0 351 0 corner
250 0.3 mul 
700 0.3 mul move 
350  
700 0.3 mul lines 
250 700 move 700 700 lines
350 350 move 550 350 lines
350 0 move 700 0 lines 
270 0 0 hserif 90 250 700 hlserif 0 700 700 vbserif 0 700 0 vtserif 0 550 350 vserif 
end } def

 /Ccedilla { CharacterDefs /C get exec CharacterDefs /capcedille get exec } def
 
 /Eacute { 10 dict begin
 CharacterDefs /capacute get exec
 500 500 div 650 700 div compscale 
 CharacterDefs /E get exec 
 end } def
 
 /Egrave { 10 dict begin
 CharacterDefs /capgrave get exec
 500 500 div 650 700 div compscale 
 CharacterDefs /E get exec 
 end } def

 /Ecircumflex { 10 dict begin
 CharacterDefs /capcirc get exec
 500 500 div 650 700 div compscale 
 CharacterDefs /E get exec 
 end } def

 /Edieresis { 10 dict begin
 CharacterDefs /capumlaut get exec
 500 500 div 650 700 div compscale 
 CharacterDefs /E get exec 
 end } def
 

 /Iacute { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 monofont not { -200 0 translate } if  CharacterDefs /capacute get exec monofont not { 200 0 translate } if
 500 500 div 650 700 div compscale 
 CharacterDefs /I get exec 
 end } def

 /Igrave { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 monofont not { -200 0 translate } if  CharacterDefs /capgrave get exec monofont not { 200 0 translate } if
 500 500 div 650 700 div compscale 
 CharacterDefs /I get exec 
 end } def

 /Icircumflex { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 monofont not { -200 0 translate } if  CharacterDefs /capcirc get exec monofont not { 200 0 translate } if
 500 500 div 650 700 div compscale 
 CharacterDefs /I get exec 
 end } def
 
 /Idieresis { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 monofont not { -200 0 translate } if  CharacterDefs /capumlaut get exec monofont not { 200 0 translate } if
 500 500 div 650 700 div compscale 
 CharacterDefs /I get exec 
 end } def
 
 
 /Ntilde { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 CharacterDefs /captilde get exec
 500 500 div 650 700 div compscale 
 CharacterDefs /N get exec 
 end } def
 

 /Oacute { 10 dict begin
 monofont not { 50 0 translate } if CharacterDefs /capacute get exec monofont not { -50 0 translate } if
 500 500 div 650 700 div compscale 
 CharacterDefs /O get exec 
 end } def

/Ograve { 10 dict begin
 monofont not { 50 0 translate } if CharacterDefs /capgrave get exec monofont not { -50 0 translate } if
 500 500 div 650 700 div compscale 
 CharacterDefs /O get exec 
 end } def

/Ocircumflex { 10 dict begin
 monofont not { 50 0 translate } if CharacterDefs /capcirc get exec monofont not { -50 0 translate } if
 500 500 div 650 700 div compscale 
 CharacterDefs /O get exec 
 end } def
 
 /Odieresis { 10 dict begin
 monofont not { 50 0 translate } if CharacterDefs /capumlaut get exec monofont not { -50 0 translate } if
 500 500 div 650 700 div compscale 
 CharacterDefs /O get exec 
 end } def
 
 /Otilde { 10 dict begin
 monofont not { 50 0 translate } if CharacterDefs /captilde get exec monofont not { -50 0 translate } if
 500 500 div 650 700 div compscale 
 CharacterDefs /O get exec 
 end } def

 /Oslash  { 100 -50 move monofont { 300 } { 500 } ifelse 750 lines
 CharacterDefs /O  get exec   } def

 /OE { 10 dict begin monofont { 400 700 div 1 compscale } if 
 175 720 move 
180 270 0 350 turns 
270 0 175 -20 turns
0 90 350 350 turnsstart
90 180 175 720 turnsend
350 700 move 350 0 line
350 700 move 700 700 lines
350 350 move 550 350 lines
350 0 move 700 0 lines
0 700 700 vbserif 0 700 0 vtserif 0 550 350 vserif
end } def

/oe { 10 dict begin monofont { 400 700 div 1 compscale } if 
 150 500 move
180 270 0 250 turns
270 0 150 0 turns
0 90 300 250 turnsstart
90 180 150 500 turnsend
300 250 move 600 250 lines
90 180 450 500 turns
180 270 300 250 turnsstart
270 0 450 0 turnsend
0 45 600 100 turns
end } def


 

 

/uniF8FF {  } def

 /Uacute { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 CharacterDefs /capacute get exec
 500 500 div 650 700 div compscale 
 CharacterDefs /U get exec 
 end } def
 
 /Ugrave { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 CharacterDefs /capgrave get exec
 500 500 div 650 700 div compscale 
 CharacterDefs /U get exec 
 end } def

 /Ucircumflex { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 CharacterDefs /capcirc get exec
 500 500 div 650 700 div compscale 
 CharacterDefs /U get exec 
 end } def

 /Udieresis { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 CharacterDefs /capumlaut get exec
 500 500 div 650 700 div compscale 
 CharacterDefs /U get exec 
 end } def
  
 /Ydieresis { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 CharacterDefs /capumlaut get exec
 500 500 div 650 700 div compscale 
 CharacterDefs /Y get exec 
 end } def

 /aacute { CharacterDefs /a get exec  CharacterDefs /minacute get exec } def
 /agrave  { CharacterDefs /a get exec  CharacterDefs /mingrave get exec } def
 /acircumflex  { CharacterDefs /a get exec  CharacterDefs /mincirc get exec } def
 /adieresis { CharacterDefs /a get exec CharacterDefs /minumlaut get exec } def 
 /atilde  { CharacterDefs /a get exec  CharacterDefs /mintilde get exec } def

 /aring { CharacterDefs /a get exec 
 smallcapsfont { 50 0 translate } if
 200 800 move 180 270 100 700 turns 270 0 200 600 turns 0 90 300 700 turns 90 180 200 800 turns 
 smallcapsfont { -50 0 translate } if
   } def
 
 /ae { 10 dict begin monofont { 400 700 div 1 compscale } if 
 300 350 move
270 180 150 250 turnsend
180 270 0 125 turns
270 0 170 0 turns
0 30 300 75 turnsstart
12 450 move
30 0 150 500 turns
% 200 500 line
0 270 300 350 turnsstart 
300 50 line
300 250 move 600 250 lines
90 180 450 500 turns
180 270 300 250 turns
270 0 450 0 turnsend
0 45 600 100 turns
end} def

 /ccedilla { CharacterDefs /c  get exec CharacterDefs /mincedille get exec } def

 /eacute { CharacterDefs /e  get exec CharacterDefs /minacute get exec } def
 /egrave { CharacterDefs /e  get exec CharacterDefs /mingrave get exec } def
 /ecircumflex { CharacterDefs /e  get exec CharacterDefs /mincirc get exec } def
 /edieresis { CharacterDefs /e  get exec CharacterDefs /minumlaut get exec } def
 
 /dotlessi { 10 dict begin /hasendswash 1 def 
 monofont { 200 0 translate } if
 0 500 move currentslanted { 0 75 line 0 0 endswash } {  0 0 line 270 0 0 hserif } ifelse 90 0 500 hlserif 
 monofont { -200 0 translate } if
 end } def


/iacute { 
smallcapsfont {
CharacterDefs /I get exec -100 0 translate CharacterDefs /minacute get exec 100 0 translate
} {
CharacterDefs /dotlessi get exec monofont not { -150 0 translate } if  CharacterDefs /minacute get exec monofont not { 150 0 translate } if
} ifelse } def

/igrave { 
smallcapsfont {
CharacterDefs /I get exec -100 0 translate CharacterDefs /mingrave get exec 100 0 translate
} {
CharacterDefs /dotlessi get exec monofont not { -150 0 translate } if  CharacterDefs /mingrave get exec monofont not { 150 0 translate } if
} ifelse } def

/icircumflex { 
smallcapsfont {
CharacterDefs /I get exec -100 0 translate CharacterDefs /mincirc get exec 100 0 translate
} {
CharacterDefs /dotlessi get exec monofont not { -150 0 translate } if  CharacterDefs /mincirc get exec monofont not { 150 0 translate } if
} ifelse } def

/idieresis { 
smallcapsfont {
CharacterDefs /I get exec -100 0 translate CharacterDefs /minumlaut get exec 100 0 translate
} {
CharacterDefs /dotlessi get exec monofont not { -150 0 translate } if  CharacterDefs /minumlaut get exec monofont not { 150 0 translate } if
} ifelse } def

 /ntilde { CharacterDefs /n get exec CharacterDefs /mintilde get exec } def
 
 /oacute { CharacterDefs /o get exec CharacterDefs /minacute get exec } def
 /ograve  { CharacterDefs /o get exec CharacterDefs /mingrave get exec } def
 /ocircumflex   { CharacterDefs /o get exec CharacterDefs /mincirc get exec } def
 /odieresis {CharacterDefs /o get exec CharacterDefs /minumlaut get exec } def
 /otilde { CharacterDefs /o get exec CharacterDefs /mintilde get exec } def
 /oslash  { 100 -50 move smallcapsfont {400} { 300 } ifelse 550 lines 
 CharacterDefs /o get exec } def

 /uacute { CharacterDefs /u get exec CharacterDefs /minacute get exec } def
 /ugrave { CharacterDefs /u get exec CharacterDefs /mingrave get exec } def
 /ucircumflex   { CharacterDefs /u get exec CharacterDefs /mincirc get exec } def
 /udieresis  { CharacterDefs /u get exec CharacterDefs /minumlaut get exec } def
 
 /ydieresis { CharacterDefs /y get exec CharacterDefs /minumlaut get exec } def
 

 
 /dagger { 10 dict begin /thin mediumthick def 200 700 move 200 0 line 0 500 move 400 500 line } def
 /degree { CharacterDefs /ring get exec } def
 /cent { CharacterDefs /c  get exec 1 1 compscale 200 -100 move 200 600 lines } def
 /sterling { 400 650 moveto
 150 180 275 700 turns
 180 270 100 500 turnsstart
 thick thin 100 500 100 0 400 0 corner
 0 350 move  currentserif { 300 } { 200 } ifelse 350 lines 
 270 100 0 hserif
 } def
 
 /section { 350 650 move 120 180 250 700 turns 180 270 100 600 turnsstart 270 0 200 500 turnsend
 0 270 400 350 turnsstart 270 180 200 200 turnsend 180 90 0 350 turnsstart 90 0 200 500 turnsend
 200 200 move 0 270 300 100 turnsstart 270 180 150 0 turnsend 180 120 50 50 turns
 } def
 /bullet { 200 450 dot 
 } def
 /paragraph { 200 700 move 200 0 lines thin thin 399 700 400 700 400 0 corner
 400 700 move 200 700 lines 180 270 0 500 turns 270 0 200 300 turns  
 200 300 transpose moveto 200 700 transpose lineto 80 700 transpose 0 620 transpose 0 500 transpose curveto 
 0 380 transpose 80 300 transpose 200 300 transpose curveto closepath
 
 } def
 /germandbls { 0 0 move 0 550 line 90 0 200 700 turnsend 0 270 400 550 turnsstart 270 180 150 400 turnsend
 0 270 400 250 turnsstart 400 150 line 270 180 200 0 turnsend
 270 0 0 hserif
 } def
 /copyright { 10 dict begin /thin mediumthick def monofont { 500 700 div 1 compscale } if
400 500 move 
180 270 250 350 turns
270 0 400 200 turns
350 700 move 180 270 0 350 turns
270 0 350 0 turns 
0 90 700 350 turns 
90 180 350 700 turns
monofont { 1 1 compscale } if
end } def
/registered { 10 dict begin /thin mediumthick def  monofont { 500 700 div 1 compscale } if
thin thin 350 500 250 500 250 200 corner 
350 500 move 0 270 450 425 turns
270 180 350 350 turns 
250 350 lines
300 350 move 
450 200 lines
350 700 move
180 270 0 350 turns
270 0 350 0 turns
0 90 700 350 turns
90 180 350 700 turns
monofont { 1 1 compscale } if
end } def
/trademark { 10 dict begin /thin mediumthick def 0 700 move 300 700 lines 150 700 move 150 400 lines 
thin thin 400 400 400 700 450 650 corner
thin thin 459 650 500 675 550 650 corner
thin thin 550 650 600 700 600 400 corner
end  } def


 /acute { 10 dict begin /thin mediumthick def 50 650 move 350 700 lines end } def
 /dieresis { 100 650 dot 300 650 dot } def
 /notequal { 10 dict begin /thin mediumthick def  
 0 400 move 400 400 lines 0 250 move 400 250 lines 50 100 move 350 525 lines 
 end } def
 /infinity { 100 500 move 180 270 0 350 turns 270 0 100 200 turns 0 45 200 350 turnsstart
 45 0 300 500 turnsend 0 270 400 350 turns 270 180 300 200 turns 180 135 200 350 turns 
 135 180 100 500 turnsend } def
 /plusminus { 10 dict begin /thin mediumthick def 0 400 move 400 400 lines 0 150 move 400 150 lines 
 200 250 move 200 550 lines end } def
 /lessequal { 10 dict begin /thin mediumthick def
 thin thin 400 500 50 400 400 300 corner 
 0 150 move 400 150 lines 
 end } def
 /greaterequal { 10 dict begin /thin mediumthick def
 thin thin 0 500 350 400 0 300 corner 
 0 150 move 400 150 lines 
 end } def
 /yen { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 thick thick 0 700 200 400 200 0 corner 
 400 700 move 200 400 lines
 50 300 move 350 300 lines
 50 200 move 350 200 lines
 270 200 0 hserif 90 0 700 hserif 90 400 700 hserif
  end } def
 /mu { 0 -200 move 0 500 line 0 200 move 270 0 125 0 turnsend 0 90 250 200 turnsstart 250 500 line 
 250 150 move 250 75 line 270 0 325 0 turnsend 0 90 400 150 turns } def

 
 /partialdiff { 400 650 move 150 180 200 700 turns 180 270 0 600 turnsstart
 270 0 200 450 turnsend 0 270 400 200 turnsstart 270 180 200 0 turnsend
 180 90 0 200 turnsstart 90 0 200 450 turnsend
   } def
 /summation { thin thick 500 700 0 700 175 525 corner
 thick thin 175 525 350 350 175 175 corner
 thin thick 175 175 0 0 500 0 corner
 0 500 700 vbserif 0 500 0 vtserif
 } def
 /product  { 10 dict begin /hasleftserif 1 def /hasrightserif 1 def
 0 700 move 500 700 lines 100 700 move 100 0 line 400 700 move 400 0 line
 90 0 700 hserif 90 500 700 hserif 270 100 0 hserif 270 400 0 hserif
 end } def
 /pi  { 0 500 move 400 500 line 100 500 move 100 0 lines 300 500 move 300 100 lines 270 0 400 0 turns
 } def
 /integral { 400 700 move 90 180 300 800 turns 180 270 200 600 turnsstart 200 100 line 270 180 100 -100 turnsend 180 90 0 0 turns } def
 /ordfeminine { 10 dict begin /thin mediumthick def
200 500 move 180 270 0 400 turns 270 0 200 300 turns 0 90 400 400 turns 90 180 200 500 turns
 400 300 move 400 500 lines 90 180 200 700 turns 180 210  0 650 turns end } def
 /ordmasculine { 10 dict begin /thin mediumthick def
 200 700 move 180 270 0 500 turns 270 0 200 300 turns 0 90 400 500 turns 90 180 200 700 turns end } def
 /uni03A9 { 
 %omega
 0 0 move 225 0 lines 180 90 0 350 turnsstart 90 0 300 720 turnsend 0 270 600 350 turnsstart 270 180 375 0 turnsend 600 0 lines } def
 /questiondown { 0 0 move 270 0 200 -220 turn 0 90 400 0 turn
90 180 250 150 turn
180 90 200 200 turn  200 400 line
200 500 dot
} def

/questiondown { 400 0 move 225 220 200 -100 turns 180 90 0 0 turnsstart
90 30 100 150 turnsend
30 90 200 300 turns  90 90 200 450 turns
200 600 dot
fill}  def

 /exclamdown { 0 -100 move 90 90 0 400 turnsend 0 0 dot  
0 600 dot
}  def

 /logicalnot { 10 dict begin /thin mediumthick def thin thin 0 350 400 350 400 200 corner end } def
 /radical { thin thick -1 350 0 350 50 175 corner
 thick thin 50 175 100 0 150 350 corner
 thin thin 150 350 200 700 400 700 corner fill
 90 0 350 hserif } def
 /florin { 400 600 move 90 180 300 700 turns 180 270 200 600 turnsstart 200 100 line 270 180 100 0 turnsend
 180 90 0 100 turns 50 350 move 350 350 lines } def
 /approxequal { 10 dict begin /thin mediumthick def
 0 450 move 45 0 100 500 turns 0 315 200 450 turns 315 0 300 400 turns 0 45 400 450 turns
 0 250 move 45 0 100 300 turns 0 315 200 250 turns 315 0 300 200 turns 0 45 400 250 turns

end} def
 /Delta { thin thick 200 0 400 0 300 350 corner
 thick thin 300 350 200 700 100 350 corner
 thin thin 100 350 0 0 200 0 corner
  } def
 /guillemotleft { 10 dict begin /thin mediumthick def 
 thin thin 100 450 0 350 100 250 corner
 thin thin 300 450 200 350 300 250 corner end  } def
 /guillemotright { 10 dict begin /thin mediumthick def 
 thin thin 0 450 100 350 0 250 corner
 thin thin 200 450 300 350 200 250 corner end } def
 /elipsis { 0 0 dot 150 0 dot 300 0 dot
 } def
 /uni00A0 { } def

 /endash { 10 dict begin /thin mediumthick def 0 350 move 400 350 lines end } def
 /emdash { 10 dict begin /thin mediumthick def 0 350 move 600 350 lines end } def

 /quotedblleft { 100 700 move 100 600 line 270 240 0 450 turnsend
 300 700 move 300 600 line 270 240 200 450 turnsend fill
 100 700 transpose thick 2 div 0 360 arc
 300 700 transpose thick 2 div 0 360 arc
  } def
 /quotedblright {  0 450 move 0 550 line 90 60 100 700 turnsend
 200 450 move 200 550 line 90 60 300 700 turnsend 
 0 450 transpose thick 2 div 0 360 arc
 200 450 transpose thick 2 div 0 360 arc
 } def
 /quoteleft {  100 700 move 100 600 line 270 240 0 450 turnsend
 100 700 transpose thick 2 div 0 360 arc
 } def
 /quoteright { 0 450 move 0 550 line 90 60 100 700 turnsend fill
 0 450 transpose thick 2 div 0 360 arc } def
 /divide { 10 dict begin /thin mediumthick def  0 350 move 400 350 lines 200 500 dot 200 200 dot end } def
 /lozenge { 10 dict begin /thin mediumthick def  
 thin thin 100 125 200 0 300 125 corner
 thin thin 300 125 400 250 300 375 corner
 thin thin 300 375 200 500 100 375 corner
 thin thin 100 375 0 240 100 125 corner 
 end } def
 /fraction { 10 dict begin /thin mediumthick def 
	 0 0 move 500 500 lines 
 end  } def
 /euro { 500 600 move 
120 180 275 720 turns 180 270 100 350 turnsstart
270 0 275 -20 turnsend 0 30 500 100 turns 
0 450 move 300 450 lines
0 250 move 300 250 lines
 } def

 /euromono { 400 600 move 
120 180 275 720 turn 180 270 80 350 turn
270 0 220 -20 turn 0 30 400 100 turn 
0 450 move 400 450 line
0 250 move 400 250 line
 } def
/quilsinglleft { 10 dict begin /thin mediumthick def thin thin 100 450 0 350 100 250 corner end } def
/quilsinglright  { 10 dict begin /thin mediumthick def thin thin 0 450 100 350 0 250 corner end  } def
 

 /uniFB01 { CharacterDefs /f get exec gsave 300 0 translate CharacterDefs /dotlessi get exec grestore } def
 /uniFB02 { CharacterDefs /f get exec gsave 300 0 translate CharacterDefs /l get exec grestore } def
 /daggerdbl { 0 dict begin /thin mediumthick def 200 700 move 200 0 lines
  0 500 move 400 500 lines
  0 200 move 400 200 lines
    end } def
 /periodcentered { 100 350 transpose thick 2 div 0 360 arc } def
 /quotesinglbase { 
 100 100 move 100 0 line 270 240 0 -150 turnsend
 100 100 transpose thick 2 div 0 360 arc
 } def
 /quotedblbase { 
 100 100 move 100 0 line 270 240 0 -150 turn 
 300 100 move 300 0 line 270 240 200 -150 turn
 100 100 transpose thick 2 div 0 360 arc
 300 100 transpose thick 2 div 0 360 arc
  } def
 
 /perthousand { 600 700 move 0 0 line monofont { 500 950 div 1 compscale } if
250 575 move 90 180 125 700 turnsend 180 270 0 575 turnsstart
270 0 125 425 turnsend 0 90 250 575 turnsstart
350 125 move 90 0 475 250 turnsend 0 270 600 125 turnsstart
270 180 475 0 turnsend 180 90 350 125 turnsstart
700 125 move 90 0 825 250 turnsend 0 270 950 125 turnsstart
270 180 825 0 turnsend 180 90 700 125 turnsstart
1 1 compscale 
} def
 
 /circumlfex { 10 dict begin /thin mediumthick def CharacterDefs /asciicircum  get exec end } def
 /tilde { 10 dict begin /thin mediumthick def CharacterDefs /asciitilde get exec end } def
 /macron { 10 dict begin /thin mediumthick def 100 700 move 300 700 lines end } def
 /breve { 10 dict begin /thin mediumthick def 100 700 move 270 0 200 650 turns 0 90 300 700 turns } def
 /dotaccent { 200 700 dot } def
 /ring { 10 dict begin /thin mediumthick def 200 800 move 180 270 100 700 turns 270 0 200 600 turns 0 90 300 700 turns 90 180 200 800 turns end } def
 /cedilla {  CharacterDefs /mincedille get } def
 /hungarumlaut { 10 dict begin /thin mediumthick def 50 650 move 150 750 lines 250 650 move 350 750 lines  } def
 /ogonek { 10 dict begin /thin mediumthick def 200 0 move 200 -50 lines 400 270 100 -120 turns 130 180 200 -190 turns } def
 /caron { 10 dict begin /thin mediumthick def 100 700 move 200 650 lines 300 700 lines } def

end


/move { 10 dict begin 
/y1 exch def /x1 exch def
x1 y1 moveto
end } def

/compscale { /compyscale exch def /compxscale exch def
} def

/transpose { 10 dict begin /y exch def /x exch def

/cwx thick def
/lb /leftbearing where { /leftbearing get } { 0 } ifelse def
/rb /rightbearing where { /rightbearing get } { 0 } ifelse def
/bb /bottombearing where { /bottombearing get } { 0 } ifelse def
/tb /topbearing where { /topbearing get } { 0 } ifelse def
currentsans { /lb lb 15 sub def /bb bb thick 4 div sub def /tb tb thick 4 div sub def  } if

/x characterwidth /compxscale where { /compxscale get mul } if cwx sub lb sub rb sub characterwidth div x mul cwx 2 div add lb add def

monofont { /propwidth where { pop /x x characterwidth propwidth div mul def} if } if


/cwy currentserif { thin } { thick } ifelse def
/y 700 /compyscale where { /compyscale get mul } if cwy sub bb sub tb sub 700 div y mul cwy 2 div bb add add def 

/x x currentslanted y mul add def

x y
end } def

/line { 10 dict begin /y2 exch def /x2 exch def
currentpoint /y1 exch def /x1 exch def
%slanted
/x20 x2 def
/y20 y2 def
 x2 y2 transpose /y2 exch def /x2 exch def
 x1 y1 transpose /y1 exch def /x1 exch def
/c thick 2 div def
/a y2 y1 sub x2 x1 sub atan 360 add 360 mod def
c currentserif currentsans or not and { x1 c add y1 moveto x1 y1 c 0 360 arc } if
x1 a 90 sub cos c mul add y1 a 90 sub sin c mul add moveto 
x2 a 90 sub cos c mul add y2 a 90 sub sin c mul add lineto 
c {
x2 a 90 sub cos c mul sub y2 a 90 sub sin c mul sub lineto 
x1 a 90 sub cos c mul sub y1 a 90 sub sin c mul sub lineto  
closepath
currentserif currentsans or not ( x2 c add y2 moveto x2 y2 c 0 360 arc ) if
} if
x20 y20 moveto
end } def



% thin line if serif
/lines { 10 dict begin /y2 exch def /x2 exch def
currentpoint /y1 exch def /x1 exch def
%slanted
/x20 x2 def
/y20 y2 def
 x2 y2 transpose /y2 exch def /x2 exch def
 x1 y1 transpose /y1 exch def /x1 exch def
/c thick 2 div def
/a y2 y1 sub x2 x1 sub atan 360 add 360 mod def
/c currentserif currentsans or { thin 2 div } { c } ifelse def
c currentserif currentsans or not and { x1 c add y1 moveto x1 y1 c 0 360 arc } if
x1 a 90 sub cos c mul add y1 a 90 sub sin c mul add moveto 
x2 a 90 sub cos c mul add y2 a 90 sub sin c mul add lineto 
c {
x2 a 90 sub cos c mul sub y2 a 90 sub sin c mul sub lineto 
x1 a 90 sub cos c mul sub y1 a 90 sub sin c mul sub lineto  
closepath
currentserif currentsans or not ( x2 c add y2 moveto x2 y2 c 0 360 arc ) if
} if
x20 y20 moveto
end } def

/dot { 10 dict begin /y exch def /x exch def
/c currentserif { thick thin add 2 div 1.2 mul } { thick thin add 2 div 1.4 mul } ifelse  def
c 0 eq { /c 40 def } if
 x y transpose /y exch def /x exch def
 x c 0.625 mul add y move x y c 0.625 mul 0 360 arc closepath
end } def



/curve { 10 dict begin /y4 exch def /x4 exch def /y3 exch def /x3 exch def /y2 exch def /x2 exch def
currentpoint /y1 exch def /x1 exch def
/c thick 2 div def

%slanted
/x40 x4 def
/y40 y4 def

 x2 y2 transpose /y2 exch def /x2 exch def
 x1 y1 transpose /y1 exch def /x1 exch def
 x3 y3 transpose /y3 exch def /x3 exch def
 x4 y4 transpose /y4 exch def /x4 exch def

/a1 y2 y1 sub x2 x1 sub atan 360 add 360 mod def
/a4 y4 y3 sub x4 x3 sub atan 360 add 360 mod def

/c1 c def
/c4 c def

c currentserif currentsans or not and { x1 c1 add y1 moveto x1 y1 c1 0 360 arc } if

/x1r x1 a1 90 sub cos c1 mul add def
/y1r y1 a1 90 sub sin c1 mul add def
/x4r x4 a4 90 sub cos c4 mul add def
/y4r y4 a4 90 sub sin c4 mul add def
/x1l x1 a1 90 sub cos c1 mul sub def
/y1l y1 a1 90 sub sin c1 mul sub def
/x4l x4 a4 90 sub cos c4 mul sub def
/y4l y4 a4 90 sub sin c4 mul sub def

/d x4 x1 sub dup mul y4 y1 sub dup mul add sqrt def
/dr x4r x1r sub dup mul y4r y1r sub dup mul add sqrt def
/dl x4l x1l sub dup mul y4l y1l sub dup mul add sqrt def

/x2r x2 x1 sub d div dr mul x1r add def
/x2l x2 x1 sub d div dl mul x1l add def
/x3r x3 x4 sub d div dr mul x4r add def
/x3l x3 x4 sub d div dl mul x4l add def
/y2r y2 y1 sub d div dr mul y1r add def
/y2l y2 y1 sub d div dl mul y1l add def
/y3r y3 y4 sub d div dr mul y4r add def
/y3l y3 y4 sub d div dl mul y4l add def

x1r y1r moveto 
x2r y2r x3r y3r x4r y4r curveto
c {
x4l y4l lineto 
x3l y3l x2l y2l x1l y1l curveto
closepath
currentserif currentsans or not { x4 c4 add y4 moveto x4 y4 c4 0 360 arc } if 
} if
x40 y40 moveto
end } def

/curves { 10 dict begin /y4 exch def /x4 exch def /y3 exch def /x3 exch def /y2 exch def /x2 exch def
currentpoint /y1 exch def /x1 exch def /s4 exch def /s1 exch def
/c thick 2 div def

%slanted
/x40 x4 def
/y40 y4 def

 x2 y2 transpose /y2 exch def /x2 exch def
 x1 y1 transpose /y1 exch def /x1 exch def
 x3 y3 transpose /y3 exch def /x3 exch def
 x4 y4 transpose /y4 exch def /x4 exch def

/a1 y2 y1 sub x2 x1 sub atan 360 add 360 mod def
/a4 y4 y3 sub x4 x3 sub atan 360 add 360 mod def

/c1 currentserif currentsans or s1 and { thin 2 div } { c } ifelse def
/c4 currentserif currentsans or s4 and { thin 2 div } { c } ifelse def



c currentserif currentsans or not and { x1 c1 add y1 moveto x1 y1 c1 0 360 arc } if
/x1r x1 a1 90 sub cos c1 mul add def
/y1r y1 a1 90 sub sin c1 mul add def
/x4r x4 a4 90 sub cos c4 mul add def
/y4r y4 a4 90 sub sin c4 mul add def
/x1l x1 a1 90 sub cos c1 mul sub def
/y1l y1 a1 90 sub sin c1 mul sub def
/x4l x4 a4 90 sub cos c4 mul sub def
/y4l y4 a4 90 sub sin c4 mul sub def
/d x4 x1 sub dup mul y4 y1 sub dup mul add sqrt def
/dr x4r x1r sub dup mul y4r y1r sub dup mul add sqrt def
/dl x4l x1l sub dup mul y4l y1l sub dup mul add sqrt def
/x2r x2 x1 sub d div dr mul x1r add def
/x2l x2 x1 sub d div dl mul x1l add def
/x3r x3 x4 sub d div dr mul x4r add def
/x3l x3 x4 sub d div dl mul x4l add def
/y2r y2 y1 sub d div dr mul y1r add def
/y2l y2 y1 sub d div dl mul y1l add def
/y3r y3 y4 sub d div dr mul y4r add def
/y3l y3 y4 sub d div dl mul y4l add def


x1r y1r moveto 
x2r y2r x3r y3r x4r y4r curveto
c {
x4l y4l lineto 
x3l y3l x2l y2l x1l y1l curveto
closepath
currentserif currentsans or not { x4 c4 add y4 moveto x4 y4 c4 0 360 arc } if } if
x40 y40 moveto
end } def




/turn { 10 dict begin /y4 exch def /x4 exch def /a2 exch def /a1 exch def
currentpoint /y1 exch def /x1 exch def
/d y4 y1 sub dup mul x4 x1 sub dup mul add sqrt def

/y2 y1 a1 sin 0.3905 mul d mul add def
/x2 x1 a1 cos 0.3905 mul d mul add def
/y3 y4 a2 sin 0.3905 mul d mul sub def
/x3 x4 a2 cos 0.3905 mul d mul sub def
x2 y2 x3 y3 x4 y4 curve
end } def

/turnsend {  currentserif currentsans or { 10 dict begin /y4 exch def /x4 exch def /a2 exch def /a1 exch def
currentpoint /y1 exch def /x1 exch def
/d y4 y1 sub dup mul x4 x1 sub dup mul add sqrt def

/y2 y1 a1 sin 0.3905 mul d mul add def
/x2 x1 a1 cos 0.3905 mul d mul add def
/y3 y4 a2 sin 0.3905 mul d mul sub def
/x3 x4 a2 cos 0.3905 mul d mul sub def
0 1 x2 y2 x3 y3 x4 y4 curves
end } { turn } ifelse } def

/turnsstart { currentserif currentsans or { 10 dict begin /y4 exch def /x4 exch def /a2 exch def /a1 exch def
currentpoint /y1 exch def /x1 exch def
/d y4 y1 sub dup mul x4 x1 sub dup mul add sqrt def

/y2 y1 a1 sin 0.3905 mul d mul add def
/x2 x1 a1 cos 0.3905 mul d mul add def
/y3 y4 a2 sin 0.3905 mul d mul sub def
/x3 x4 a2 cos 0.3905 mul d mul sub def
1 0 x2 y2 x3 y3 x4 y4 curves
end } { turn } ifelse } def

/turns { currentserif currentsans or { 10 dict begin /y4 exch def /x4 exch def /a2 exch def /a1 exch def
currentpoint /y1 exch def /x1 exch def
/d y4 y1 sub dup mul x4 x1 sub dup mul add sqrt def

/y2 y1 a1 sin 0.3905 mul d mul add def
/x2 x1 a1 cos 0.3905 mul d mul add def
/y3 y4 a2 sin 0.3905 mul d mul sub def
/x3 x4 a2 cos 0.3905 mul d mul sub def
1 1 x2 y2 x3 y3 x4 y4 curves
end } { turn } ifelse } def


/endswash { currentslanted { 10 dict begin /y exch def /x exch def
% x y transpose /y exch def /x exch def
x y 75 add move 
270 0 x 75 add thick 4 div add y turnsend
0 45 x 150 add thick 2 div add y 75 add turns 
end } { pop pop } ifelse } def

/startswash { currentslanted { 10 dict begin /y exch def /x exch def
% x y transpose /y exch def /x exch def
x y 75 add move 
90 180 x 75 sub y turnsend
180 270 x 150 sub y 75 add turns 
end } { pop pop } ifelse } def

/hserifcoordinates { /cw exch def
/y exch def /x exch def /a exch def
/flip a 360 add 360 mod 180 lt { {} } { {neg} } ifelse def
x y transpose /y exch def /x exch def
/x0 x def 
/y0 y thin 2 div flip add def
/x8 x thin 2 mul thick 2 div add flip add def
/y8 y thin 2 div flip add def
/x1 x thin 2 mul thick 2 div add flip sub def
/y1 y thin 2 div flip sub def 
/x4 x cw 2 div a sin mul thin a 90 add sin mul add sub def
/y4 y thin a sin mul cw 2 div a 90 add sin mul sub sub def
/x5 x cw 2 div a sin mul thin a 90 sub sin mul add add def
/y5 y thin a sin mul cw 2 div a 90 sub sin mul sub sub def
/x45 x4 x5 add 2 div def
/y45 y4 y5 add 2 div def
/x08 x0 x8 add 2 div def
/x01 x0 x1 add 2 div def

/x2 x x1 x sub 0.6 mul add def
/y2 y1 def 
/x3 x4 a cos thin mul 2 div add def
/y3 y4 a sin thin mul 2 div add def
/x6 x5 a cos thin mul 2 div add def
/y6 y5 a sin thin mul 2 div add def
/x7 x x8 x sub 0.6 mul add def
/y7 y1 def
} def

/hserif { currentserif { 20 dict begin 
thick hserifcoordinates
x8 y8 moveto
x1 y8 lineto
x1 y1 lineto
% x2 y2 x3 y3 x4 y4 curveto
% x5 y5 lineto
% x6 y6 x7 y7 x8 y1 curveto
x8 y1 lineto
x8 y8 lineto 
closepath
end  } { pop pop pop } ifelse } def

/hsserif { currentserif {20 dict begin 
thin hserifcoordinates
x8 y8 moveto
x1 y8 lineto
x1 y1 lineto
% x2 y2 x3 y3 x4 y4 curveto
% x5 y5 lineto
% x6 y6 x7 y7 x8 y1 curveto
x8 y1 lineto
x8 y8 lineto 
closepath
end  } { pop pop pop } ifelse  } def


/hlserif { currentserif { 20 dict begin 
thick hserifcoordinates
x0 y0 moveto
x1 y8 lineto
x1 y1 lineto
% x2 y2 x3 y3 x4 y4 curveto
% x5 y5 lineto
x08 y1 lineto
x08 y0 lineto
closepath
end  } { pop pop pop } ifelse  } def

/hrserif { currentserif { 20 dict begin 
thick hserifcoordinates
x01 y0 moveto
x01 y1 lineto
% x4 y4 lineto
% x5 y5 lineto
% x6 y6 x7 y7 x8 y1 curveto
x8 y1 lineto
x8 y8 lineto 
x0 y0 lineto
closepath
end  } { pop pop pop } ifelse  } def





/vserif { currentserif { 10 dict begin /y exch def /x exch def /a exch def
x y transpose /y exch def /x exch def
x thin 2 div sub thick currentslanted mul sub y thick sub moveto
thin 0 rlineto
thick 2 mul currentslanted mul thick 2 mul rlineto
thin neg 0 rlineto
closepath
end  } { pop pop pop } ifelse } def



/vtserif { currentserif { 10 dict begin /y exch def /x exch def /a exch def
x y transpose /y exch def /x exch def
x thin 2 div sub thin currentslanted mul sub y thin 2 div sub moveto
thin 0 rlineto
thin 2 div thick add currentslanted mul thin 2 div thick add rlineto
thin neg 0 rlineto
closepath
end  } { pop pop pop } ifelse  } def


/vbserif { currentserif { 10 dict begin /y exch def /x exch def /a exch def
x y transpose /y exch def /x exch def
x thin 2 div sub thick currentslanted mul sub y thick sub moveto
thin 0 rlineto
thick thin 2 div add currentslanted mul thick thin 2 div add rlineto
thin neg 0 rlineto
closepath
end  } { pop pop pop } ifelse  } def

/cornercoordinates {
/y2 exch def /x2 exch def /y1 exch def /x1 exch def /y0 exch def /x0 exch def
/s2 exch def /s0 exch def
x0 y0 transpose /y0 exch def /x0 exch def
x1 y1 transpose /y1 exch def /x1 exch def
x2 y2 transpose /y2 exch def /x2 exch def


/a0 y1 y0 sub x1 x0 sub atan 360 add 360 mod def
/a2 y1 y2 sub x1 x2 sub atan 360 add 360 mod def

% test angle and reverse if necessary
a0 a2 sub 360 add 360 mod 180 gt {
	x0 y0 x2 y2 /y0 exch def /x0 exch def /y2 exch def /x2 exch def
	a0 a2 /a0 exch def /a2 exch def
	s0 s2 /s0 exch def /s2 exch def
} if


% find outer crossing
/x0r x0 s0 2 div a0 90 sub cos mul add def
/y0r y0 s0 2 div a0 90 sub sin mul add def
/x2l x2 s2 2 div a2 90 add cos mul add def
/y2l y2 s2 2 div a2 90 add sin mul add def

/d0 y1 y0 sub x1 x0 sub div def
/d2 y1 y2 sub x1 x2 sub div def
% y0r + d0*(xouter-x0r) = y2l + d2*(xouter-x2l)
% d0*xouter  = y2l + d2*(xouter-x2l) - y0r + d0*x0r
% d0*xouter - d2*xouter = y2l - d2*x2l - y0r + d0*x0r
% xouter = ( y2l - d2*x2l - y0r + d0*x0r ) / ( d0 - d2 )
% youter = y0r + d0 * (xouter-x0r) 
/xouter y2l d2 x2l mul sub y0r sub d0 x0r mul add d0 d2 sub div def
/youter y2l d2 xouter x2l sub mul add def
x1 x0 eq { /xouter x0r def /youter y2l d2 xouter x2l sub mul add def } if 
x1 x2 eq { /xouter x2l def /youter y0r d0 xouter x0r sub mul add def } if
% (d0) print d0 print (d2) print d2 print (xouter) print xouter print (youter) print youter print
% find inner crossing
/x2r x2 s2 2 div a2 90 sub cos mul add def
/y2r y2 s2 2 div a2 90 sub sin mul add def
/x0l x0 s0 2 div a0 90 add cos mul add def
/y0l y0 s0 2 div a0 90 add sin mul add def

/xinner y2r d2 x2r mul sub y0l sub d0 x0l mul add d0 d2 sub div def
/yinner y2r d2 xinner x2r sub mul add def
x1 x0 eq { /xinner x0l def /yinner y2r d2 xinner x2r sub mul add def } if 
x1 x2 eq { /xinner x2r def /yinner y0l d0 xinner x0l sub mul add def } if
% (xinner) print xinner print (yinner) print yinner print
} def
 
/corner { 32 dict begin
currentserif currentsans or { 
cornercoordinates
x0r y0r moveto
xouter youter lineto
x2l y2l lineto
x2 s2 2 div a2 90 add cos mul sub
y2 s2 2 div a2 90 add sin mul sub lineto
xinner yinner lineto
x0 s0 2 div a0 90 sub cos mul sub 
y0 s0 2 div a0 90 sub sin mul sub lineto
closepath } { 
/y2 exch def /x2 exch def /y1 exch def /x1 exch def /y0 exch def /x0 exch def pop pop
x0 y0 move
x1 y1 line
x2 y2 line	
}	ifelse
end  
} def

/cornercapped { 32 dict begin
currentserif currentsans or { 
cornercoordinates
% y0r + d0 * (xouterr - x0r) = youter
% d0 * xouterr = youter - y0r + d0 * x0r
% xouterr = (youter - y0r + d0 * x0r ) / d0

/youter y1 thin 2 div y1 y0 gt { add } { sub } ifelse  def
/xouterr youter y0r sub d0 x0r mul add d0 div def
x1 x0 eq { /xouterr x0l def } if 
x1 x2 eq { /xouterr x2r def } if
/xouterl youter y0l sub d2 x2l mul add d2 div def
x1 x0 eq { /xouterl x0r def } if 
x1 x2 eq { /xouterl x2l def } if

%(youter) print youter print (xouterr) print xouterr print (xouterl) print xouterl print

x0r y0r moveto
xouterr youter lineto
xouterl youter lineto
x2l y2l lineto
x2 s2 2 div a2 90 add cos mul sub
y2 s2 2 div a2 90 add sin mul sub lineto
xinner yinner lineto
x0 s0 2 div a0 90 sub cos mul sub 
y0 s0 2 div a0 90 sub sin mul sub lineto
closepath	 } { 
/y2 exch def /x2 exch def /y1 exch def /x1 exch def /y0 exch def /x0 exch def pop pop
x0 y0 move
x1 y1 line
x2 y2 line	
}	ifelse 

end } def



/BuildChar { 5 dict begin
 /char exch def /fontdict exch def 
 /charname fontdict /Encoding get char get def 
   
 fontdict begin 
   % gsave
    
     % charname print fontdict /FontName get print
	 /characterwidth Metrics charname get def  
%	 /thick ${kugiweight} def
%	 /thin 50 def
%	 /mediumthick thick thin add 2 div def
%	 /currentslanted ${kugislant} def
%	 /currentserif ${kugiserif} def
 %    Metrics charname get 0 BBox charname get aload pop 
     Metrics charname get 0 [-100 -200 1100 800] aload pop 
     setcachedevice 
  %   thick 0 eq { /{ stroke } def } if
     
     
     gsave
     % 0 0 1 setrgbcolor newpath 0 0 25 0 360 arc fill
     grestore
     
     CharacterDefs charname get exec 
     
     thick 0 eq { stroke } { fill } ifelse 
     

     % fontdict /FontName get print
   % grestore
 end
 
 end
 } def


/UniqueID ${uniqueid} def
end
/Kugi${kugivariant} exch definefont pop `;

   context = rpn(code, context);
}
   return context;
} 


  
