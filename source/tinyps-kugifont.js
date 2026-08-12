rpnOperators.kugifont = function(context) {

// complete set

var fontvariants = [["Light", 60, 0,0,0,1],["Regular",85,0,0,0,2],["Bold",110,0,0,0,3],["Black",135,0,0,0,4],["LightItalic", 60, 0.2,0,0,5],["Italic",85,0.2,0,0,6],["BoldItalic",110,0.2,0,0,7],["BlackItalic",135,0.2,0,0,8],["Caps",85,0,1,0,9],["Mono",85,0,0,1,10],["Stroke",0,0,0,0,11]];

// fonts that are not yet Truetype

fontvariants = [["LightItalic", 60, 0.2,0,0,5],["BoldItalic",110,0.2,0,0,7],["BlackItalic",135,0.2,0,0,8],["Caps",85,0,1,0,9],["Mono",85,0,0,1,10],["Stroke",0,0,0,0,11]];

for(let v of fontvariants) {	
	let [kugivariant, kugiweight, kugislant, kugicaps, kugimono, uniqueid] = v;
	
	let code = `11 dict dup begin

/FontName (Kugi${kugivariant}) def
/CharacterEncoding (MacRoman) def
/FontType 3 def
/FontMatrix [.001 0 0 .001 0 0] def
/FontBBox [0 0 1138 1027] def
/smallcapsfont ${kugicaps} def
/monofont ${kugimono} def
/chracterweight ${kugiweight} def
/currentslanted ${kugislant} def

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
dup (b) 0 get /b  put
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
dup 140 /minAoe put
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
dup 246 /circumlfex put
dup 247 /tilde put
dup 248 /macron put
dup 249 /breve put
dup 250 /dotaccent put
dup 251 /ring put
dup 252 /cedilla put
dup 253 /hungarumlaut put
dup 254 /ogonek put
dup 255 /caron put

smallcapsfont {
dup (0) 0 get /num0smallcaps put
dup (1) 0 get /num1smallcaps put
dup (2) 0 get /num2smallcaps put
dup (3) 0 get /num3smallcaps put
dup (4) 0 get /num4smallcaps put
dup (5) 0 get /num5smallcaps put
dup (6) 0 get /num6smallcaps put
dup (7) 0 get /num7smallcaps put
dup (8) 0 get /num8smallcaps put
dup (9) 0 get /num9smallcaps put
dup (a) 0 get /minAsmallcaps put
dup (b) 0 get /minBsmallcaps put
dup (c) 0 get /minCsmallcaps put
dup (d) 0 get /minDsmallcaps put
dup (e) 0 get /minEsmallcaps put
dup (f) 0 get /minFsmallcaps put
dup (g) 0 get /minGsmallcaps put
dup (h) 0 get /minHsmallcaps put
dup (i) 0 get /minIsmallcaps put
dup (j) 0 get /minJsmallcaps put
dup (k) 0 get /minKsmallcaps put
dup (l) 0 get /minLsmallcaps put
dup (m) 0 get /minMsmallcaps put
dup (n) 0 get /minNsmallcaps put
dup (o) 0 get /minOsmallcaps put
dup (p) 0 get /minPsmallcaps put
dup (q) 0 get /minQsmallcaps put
dup (r) 0 get /minRsmallcaps put
dup (s) 0 get /minSsmallcaps put
dup (t) 0 get /minTsmallcaps put
dup (u) 0 get /minUsmallcaps put
dup (v) 0 get /minVsmallcaps put
dup (w) 0 get /minWsmallcaps put
dup (x) 0 get /minXsmallcaps put
dup (y) 0 get /minYsmallcaps put
dup (z) 0 get /minZsmallcaps put

dup 135 /aacutesmallcaps put
dup 136 /minAgravesmallcaps put
dup 137 /minAcircsmallcaps put
dup 138 /minAumlautsmallcaps put
dup 139 /minAtildesmallcaps put
dup 140 /minAoesmallcaps put
dup 141 /ccedillasmallcaps put
dup 142 /eacutesmallcaps put
dup 143 /minEgravesmallcaps put
dup 144 /minEcircsmallcaps put
dup 145 /minEumlautsmallcaps put
dup 146 /iacutesmallcaps put
dup 147 /minIgravesmallcaps put
dup 148 /minIcircsmallcaps put
dup 149 /minIumlautsmallcaps put
dup 150 /minNtildesmallcaps put
dup 151 /minOacutesmallcaps put
dup 152 /minOgravesmallcaps put
dup 153 /minOcircsmallcaps put
dup 154 /minOumlautsmallcaps put
dup 155 /minOtildesmallcaps put
dup 156 /uacutesmallcaps put
dup 157 /minUgravesmallcaps put
dup 158 /minUcircsmallcaps put
dup 159 /minUumlautsmallcaps put

dup 190 /minAEsmallcaps put

dup 207 /minOEsmallcaps put

dup 216 /minYumlautsmallcaps put


} if

monofont {
	dup (!) 0 get /exclamationmono put
	dup (") 0 get /quotemono put
	dup (%) 0 get /percent put
	dup (%) 0 get /percent put
dup (&) 0 get /ampersandmono put
dup (') 0 get /singlequotemono put
dup 40 /openparanthesismono put
dup 41 /closeparanthesismono put
dup (@) 0 get /atmono put
dup (,) 0 get /commamono put
dup (.) 0 get /pointmono put
dup (0) 0 get /num0mono put
dup (1) 0 get /num1mono put
dup (:) 0 get /colonmono put
dup (;) 0 get /semicolonmono put
dup (A) 0 get /capAmono put
dup (B) 0 get /capBmono put
dup (C) 0 get /capCmono put
dup (D) 0 get /capDmono put
dup (E) 0 get /capEmono put
dup (F) 0 get /capFmono put
dup (G) 0 get /capGmono put
dup (H) 0 get /capHmono put
dup (I) 0 get /capImono put

dup (K) 0 get /capKmono put
dup (L) 0 get /capLmono put
dup (M) 0 get /capMmono put
dup (N) 0 get /capNmono put
dup (O) 0 get /capOmono put
dup (P) 0 get /capPmono put
dup (Q) 0 get /capQmono put
dup (R) 0 get /capRmono put
dup (S) 0 get /capSmono put
dup (T) 0 get /capTmono put
dup (U) 0 get /capUmono put
dup (V) 0 get /capVmono put
dup (W) 0 get /capWmono put
dup (X) 0 get /capXmono put
dup (Y) 0 get /capYmono put
dup (Z) 0 get /capZmono put
dup (:) 0 get /colonmono put
dup (;) 0 get /semicolonmono put
dup ([) 0 get /openbracketmono put
dup (]) 0 get /closebracketmono put
dup (_) 0 get /underlinemono put
dup (^) 0 get /circmono put
dup (f) 0 get /minFmono put
dup (i) 0 get /minImono put
dup (j) 0 get /minJmono put
dup (l) 0 get /minLmono put
dup (m) 0 get /minMmono put
dup (r) 0 get /minRmono put
dup (t) 0 get /minTmono put
dup (w) 0 get /minWmono put
dup ({) 0 get /opencurlymono put
dup (|) 0 get /pipemono put
dup (}) 0 get /closecurlymono put

dup 128 /capAumlautmono put
dup 129 /capAodanishmono put
dup 130 /Ccedillamono put
dup 131 /capEacutemono put
dup 132 /capNtildemono put
dup 133 /capOumlautmono put
dup 134 /capUumlautmono put
dup 146 /iacutemono put
dup 147 /minIgravemono put
dup 148 /minIcircmono put
dup 149 /minIumlautmono put

dup 174 /capAEmono put
dup 175 /capOslashmono put

dup 190 /minAEmono put

dup 203 /capAgravemono put
dup 204 /Atildemono put
dup 217 /capYumlautmono put

dup 228 /permillemono put
dup 229 /capAcircmono put
dup 230 /capEcircmono put
dup 231 /capAacutemono put
dup 232 /capEumlautmono put
dup 233 /capEgravemono put
dup 234 /Iacutemono put
dup 235 /capIcircmono put
dup 236 /capIumlautmono put
dup 237 /capIgravemono put
dup 238 /capOacutemono put
dup 239 /capOcircmono put

dup 241 /capOgravemono put
dup 242 /Uacutemono put
dup 243 /capUcircmono put
dup 244 /capUgravemono put



} if

pop

/Metrics 512 dict def Metrics begin
/.notdef 0 def
/space 500 def
/exclam 200 def /exclamationmono 500 def
/quotedbl 300 def /quotemono 500 def
/numbersign 500 def
/dollar 500 def
/percent 700 def /percentmono 500 def
/ampersand 600 def /ampersandmono 500 def
/quotesingle 200 def /singlequotemono 500 def
/parenleft  300 def /openparanthesismono 500 def
/parenright 300 def /closeparanthesismono 500 def
/asterisk 500 def
/plus 500 def
/comma 200 def /commamono 500 def
/hyphen 500 def
/period 200 def /pointmono 500 def
/slash 500 def
/at 800 def /atmono 500 def
/zero  500 def /num0smallcaps 500 def /num0mono 500 def
/one  500 def /num1smallcaps 500 def /num1mono 500 def
/two  500 def /num2smallcaps 500 def
/three  500 def /num3smallcaps 500 def
/four 500 def /num4smallcaps 500 def
/five 500 def /num5smallcaps 500 def
/six 500 def /num6smallcaps 500 def
/seven 500 def /num7smallcaps 500 def
/eight 500 def /num8smallcaps 500 def
/nine 500 def /num9smallcaps 500 def
/colon 200 def /colonmono 500 def
/semicolon 200 def /semicolonmono 500 def
/less 500 def
/equal 500 def
/greater 500 def
/question 500 def
/A 600 def /minAsmallcaps 600 def /capAmono 500 def
/B 600 def /minBsmallcaps 600 def /capBmono 500 def
/C 600 def /minCsmallcaps 600 def /capCmono 500 def
/D 600 def /minDsmallcaps 600 def /capDmono 500 def
/E 600 def /minEsmallcaps 600 def /capEmono 500 def
/F 600 def /minFsmallcaps 600 def /capFmono 500 def
/G 600 def /minGsmallcaps 600 def /capGmono 500 def
/H 600 def /minHsmallcaps 600 def /capHmono 500 def
/I 200 def /minIsmallcaps 200 def /capImono 500 def
/J 500 def /minJsmallcaps 500 def 
/K 600 def /minKsmallcaps 600 def /capKmono 500 def
/L 600 def /minLsmallcaps 600 def /capLmono 500 def
/M 700 def /minMsmallcaps 700 def /capMmono 500 def
/N 600 def /minNsmallcaps 600 def /capNmono 500 def
/O  700 def /minOsmallcaps 700 def /capOmono 500 def
/P  600 def /minPsmallcaps 600 def /capPmono 500 def
/Q  700 def /minQsmallcaps 700 def /capQmono 500 def
/R  600 def /minRsmallcaps 600 def /capRmono 500 def
/S  600 def /minSsmallcaps 600 def /capSmono 500 def
/T 600 def /minTsmallcaps 600 def /capTmono 500 def
/U 600 def /minUsmallcaps 600 def /capUmono 500 def
/V 600 def /minVsmallcaps 600 def /capVmono 500 def
/W 800 def /minWsmallcaps 800 def /capWmono 500 def
/X 600 def /minXsmallcaps 600 def /capXmono 500 def
/Y 600 def /minYsmallcaps 600 def /capYmono 500 def
/Z 600 def /minZsmallcaps 600 def /capZmono 500 def
/bracketleft 300 def /openbracketmono 500 def
/backslash 500 def 
/bracketright 300 def /closebracketmono 500 def
/asciicircum  300 def /circmono 500 def
/underscore   500 def /underlinemono 500 def
/grave 500 def
/a ${kugislant?600:500} def
/b  500 def
/c  500 def
/d ${kugislant?600:500} def
/e  500 def
/f 400 def /minFmono 500 def
/g 500 def
/h ${kugislant?600:500} def
/i ${kugislant?300:200} def /minImono 500 def
/j ${kugislant?300:200} def /minJmono 500 def
/k 500 def
/l ${kugislant?300:200} def /minLmono 500 def
/m ${kugislant?800:700} def /minMmono 500 def
/n ${kugislant?600:500} def
/o 500 def
/p 500 def
/q 500 def
/r 400 def /minRmono 500 def
/s 500 def
/t 500 def /minTmono 500 def
/u ${kugislant?600:500} def
/v 500 def
/w 700 def /minWmono 500 def
/x 500 def
/y 500 def
/z 500 def
/braceleft 400 def /opencurlymono 500 def
/bar 200 def /pipemono 500 def
/braceright 400 def /closecurlymono 500 def
/asciitilde 500 def
 /Adieresis 600 def  /capAumlautmono 500 def
 /Aring 600 def /capAodanishautmono 500 def
 /Ccedilla 600 def  /Ccedillamono 500 def
 /Eacute 600 def  /capEacutemono 500 def
 /Ntilde 600 def  /capNtildemono 500 def
 /Odieresis 700 def  /capOumlautmono 500 def
 /Udieresis 600 def  /capUumlautmono 500 def
 /aacute 500 def /aacutesmallcaps 600 def 
 /agrave  ${kugislant?600:500} def /minAgravesmallcaps 600 def 
 /acircumflex  500 def /minAcircsmallcaps 600 def 
 /adieresis ${kugislant?600:500} def /minAumlautsmallcaps 600 def 
 /atilde  ${kugislant?600:500} def /minAtildesmallcaps 600 def 
 /minAoe 500 def /minAoesmallcaps 600 def 
 /ccedilla 500 def /ccedillasmallcaps 600 def 
 /eacute 500 def /eacutesmallcaps 600 def 
 /egrave 500 def /minEgravesmallcaps 600 def 
 /ecircumflex 500 def /minEcircsmallcaps 600 def 
 /edieresis 500 def /minEumlautsmallcaps 600 def 
 /iacute ${kugislant?300:200} def /iacutesmallcaps 200 def /iacutemono 500 def 
 /igrave ${kugislant?300:200} def /minIgravesmallcaps 200 def /minIgravemono 500 def
 /icircumflex  ${kugislant?300:200} def /minIcircsmallcaps 200 def /minIcircmono 500 def
 /idieresis ${kugislant?300:200} def /minIumlautsmallcaps 200 def /miniUmlautmono 500 def
 /ntilde ${kugislant?600:500} def /minNtildesmallcaps 600 def 
 /oacute 500 def /minOacutesmallcaps 700 def 
 /ograve  500 def /minOgravesmallcaps 700 def 
 /ocircumflex   500 def /minOcircsmallcaps 700 def 
 /odieresis 500 def /minOumlautsmallcaps 700 def 
 /otilde 500 def /minOtildesmallcaps 700 def 
 /uacute ${kugislant?600:500} def /uacutesmallcaps 600 def 
 /ugrave ${kugislant?600:500} def /minUgravesmallcaps 600 def 
 /ucircumflex ${kugislant?600:500} def /minUcircsmallcaps 600 def 
 /udieresis ${kugislant?600:500} def /minUumlautsmallcaps 600 def 
 /dagger 500 def
 /degree 500 def
 /cent 500 def
 /sterling 500 def
 /section 500 def
 /bullet 500 def
 /paragraph 500 def
 /germandbls 500 def
 /copyright 800 def /copyrightmono 500 def
 /registered 800 def /registeredmono 500 def
 /trademark 700 def /trademark 500 def
 /acute 500 def
 /dieresis 500 def
 /notequal 500 def
 /AE 800 def  /capAEmono 500 def
 /Oslash  700 def /Oslashsmallcaps 700 def /Oslashmono 500 def
 /infinity 500 def
 /plusminus 500 def
 /lessequal 500 def
 /greaterequal 500 def
 /yen 500 def
 /mu 500 def
 /partialdiff 500 def
 /summation 600 def /capSigmamono 500 def
 /product  500 def
 /pi  500 def
 /integral 500 def
 /ordfeminine 500 def
 /ordmasculine 500 def
 /uni03A9 700 def /capOmegamono 500 def
 /ae 700 def /minAEsmallcaps 800 def /minAEmono 500 def
 /oslash  500 def
 /questiondown 500 def
  /exclamdown 200 def /exclamationspanishmono 500 def
 /logicalnot 500 def
 /radical 500 def
 /florin 500 def
 /approxequal 500 def
 /Delta 500 def
 /guillemotleft 500 def
 /guillemotright 500 def
 /elipsis 500 def
 /uni00A0 500 def
 /Agrave 600 def   /capAgravemono 500 def
 /Atilde 600 def   /Atildemono 500 def
 /Otilde 700 def   /capOtildemono 500 def
 /OE 800 def  /capOEmono 500 def
 /oe 700 def  /minOEsmallcaps 800 def /minOEmono 500 def
 /endash 500 def /ndashmono 500 def
 /emdash 700 def /mdashmono 500 def
 /quotedblleft 500 def
 /quotedblright 500 def
 /quoteleft 500 def  /singleopentopquotemono 500 def
 /quoteright 500 def /singleclosetopquotemono 500 def
 /divide 500 def
 /lozenge 500 def
 /ydieresis 500 def /minYumlautsmallcaps 600 def
 /Ydieresis 600 def  /capYumlautmono 500 def
 /fraction 500 def
 /euro 600 def /euromono 500 def
 /quilsinglleft 200 def /singleoopenquotemono 500 def
 /quilsinglright  200 def /singleclosequotemono 500 def
 /uniFB01 500 def
 /uniFB02 500 def
 /daggerdbl 500 def
 /periodcentered 500 def
 /quotesinglbase 200 def /singleopenbottomquotemono 500 def
 /quotedblbase 200 def /openbottomquotemono 500 def
 /perthousand 1100 def /permillemono 500 def
 /Acircumflex  600 def  /capAcircmono 500 def
 /Ecircumflex 600 def  /capEcircmono 500 def
 /Aacute 600 def  /capAacutemono 500 def
 /Edieresis 600 def  /capEumlautmono 500 def
 /Egrave  600 def  /capEgravemono 500 def
 /Iacute 200 def  /Iacutemono 500 def
 /Icircumflex 200 def /capIcircmono 500 def
 /Idieresis 200 def  /capIumlautmono 500 def
 /Igrave  200 def  /capIgravemono 500 def
 /Oacute 700 def  /capOacutemono 500 def
 /Ocircumflex 700 def  /capOcircmono 500 def
 /uniF8FF 500 def
 /Ograve  700 def  /capOgravemono 500 def
 /Uacute 600 def  /Uacutemono 500 def
 /Ucircumflex  600 def /minUcircsmallcaps 600 def /capUcircmono 500 def
 /Ugrave 600 def /minUgravesmallcaps 600 def /capUgravemono 500 def
 /dotlessi 200 def /capIturkishmono 500 def
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
/.notdef [0 0 0 0] def
/space [0 0 0 0] def
/exclam [0 0 200 700] def /exclamationmono [0 0 500 700] def
/quotedbl [0 0 300 700] def /quotemono [0 0 500 700] def
/numbersign [0 0 500 700] def
/dollar [0 0 500 700] def
/percent [0 0 500 700] def /percentmono [0 0 500 700] def
/ampersand [0 0 500 700] def /ampersandmono [0 0 500 700] def
/quotesingle [0 0 500 700] def /singlequotemono [0 0 500 700] def
/parenleft  [0 0 500 700] def /openparanthesismono [0 0 500 700] def
/parenright [0 0 500 700] def /closeparanthesismono [0 0 500 700] def
/asterisk [0 0 500 700] def
/plus [0 0 500 700] def
/comma [0 0 500 700] def /commamono [0 0 500 700] def
/hyphen [0 0 500 700] def
/period [0 0 500 700] def /pointmono [0 0 500 700] def
/slash [0 0 500 700] def
/at [0 0 500 700] def /atmono [0 0 500 700] def
/zero  [0 0 500 700] def /num0smallcaps [0 0 500 700] def /num0mono [0 0 500 700] def 
/one  [0 0 500 700] def /num1smallcaps [0 0 500 700] def /num1mono [0 0 500 700] def
/two  [0 0 500 700] def /num2smallcaps [0 0 500 700] def
/three  [0 0 500 700] def /num3smallcaps [0 0 500 700] def
/four [0 0 500 700] def /num4smallcaps [0 0 500 700] def
/five [0 0 500 700] def /num5smallcaps [0 0 500 700] def
/six [0 0 500 700] def /num6smallcaps [0 0 500 700] def
/seven [0 0 500 700] def /num7smallcaps [0 0 500 700] def
/eight [0 0 500 700] def /num8smallcaps [0 0 500 700] def
/nine [0 0 500 700] def /num9smallcaps [0 0 500 700] def
/colon [0 0 500 700] def /colonmono [0 0 500 700] def
/semicolon [0 0 500 700] def /semicolonmono [0 0 500 700] def
/less [0 0 500 700] def
/equal [0 0 500 700] def
/greater [0 0 500 700] def
/question [0 0 500 700] def
/A [0 0 500 700] def /minAsmallcaps [0 0 500 700] def /capAmono [0 0 500 700] def 
/B [0 0 500 700] def /minBsmallcaps [0 0 500 700] def /capBmono [0 0 500 700] def 
/C [0 0 500 700] def /minCsmallcaps [0 0 500 700] def /capCmono [0 0 500 700] def 
/D [0 0 500 700] def /minDsmallcaps [0 0 500 700] def /capDmono [0 0 500 700] def 
/E [0 0 500 700] def /minEsmallcaps [0 0 500 700] def /capEmono [0 0 500 700] def 
/F [0 0 500 700] def /minFsmallcaps [0 0 500 700] def /capFmono [0 0 500 700] def 
/G [0 0 500 700] def /minGsmallcaps [0 0 500 700] def /capGmono [0 0 500 700] def 
/H [0 0 500 700] def /minHsmallcaps [0 0 500 700] def /capHmono [0 0 500 700] def 
/I [0 0 100 700] def /minIsmallcaps [0 0 500 700] def /capImono [0 0 500 700] def 
/J [0 0 500 700] def /minJsmallcaps [0 0 500 700] def /capJmono [0 0 500 700] def 
/K [0 0 500 700] def /minKsmallcaps [0 0 500 700] def /capKmono [0 0 500 700] def 
/L [0 0 500 700] def /minLsmallcaps [0 0 500 700] def /capLmono [0 0 500 700] def 
/M [0 0 700 700] def /minMsmallcaps [0 0 500 700] def /capMmono [0 0 500 700] def 
/N [0 0 500 700] def /minNsmallcaps [0 0 500 700] def /capNmono [0 0 500 700] def 
/O  [0 0 600 700] def /minOsmallcaps [0 0 500 700] def /capOmono [0 0 500 700] def 
/P  [0 0 500 700] def /minPsmallcaps [0 0 500 700] def /capPmono [0 0 500 700] def 
/Q  [0 0 600 700] def /minQsmallcaps [0 0 500 700] def /capQmono [0 0 500 700] def 
/R  [0 0 500 700] def /minRsmallcaps [0 0 500 700] def /capRmono [0 0 500 700] def 
/S  [0 0 500 700] def /minSsmallcaps [0 0 500 700] def /capSmono [0 0 500 700] def 
/T [0 0 500 700] def /minTsmallcaps [0 0 500 700] def /capTmono [0 0 500 700] def 
/U [0 0 500 700] def /minUsmallcaps [0 0 500 700] def /capUmono [0 0 500 700] def 
/V [0 0 500 700] def /minVsmallcaps [0 0 500 700] def /capVmono [0 0 500 700] def 
/W [0 0 700 700] def /minWsmallcaps [0 0 500 700] def /capWmono [0 0 500 700] def 
/X [0 0 500 700] def /minXsmallcaps [0 0 500 700] def /capXmono [0 0 500 700] def 
/Y [0 0 500 700] def /minYsmallcaps [0 0 500 700] def /capYmono [0 0 500 700] def 
/Z [0 0 500 700] def /minZsmallcaps [0 0 500 700] def /capZmono [0 0 500 700] def 
/bracketleft [0 0 400 700] def /openbracketmono [0 0 400 700] def 
/backslash [0 0 400 700] def
/bracketright [0 0 400 700] def /closebracketmono [0 0 400 700] def
/asciicircum  [0 0 400 700] def /circmono [0 0 400 700] def
/underscore   [0 0 500 700] def /underlinemono [0 0 500 700] def
/grave [0 0 400 700] def
/Z [0 0 400 700] def
/a [0 0 500 700] def
/b  [0 0 400 700] def
/c  [0 0 400 700] def
/d  [0 0 400 700] def
/e  [0 0 400 700] def
/f [0 0 400 700] def /minFmono [0 0 500 700] def
/g [0 0 500 700] def
/h [0 0 400 700] def
/i [0 0 200 700] def /minImono [0 0 400 700] def
/j [0 0 400 700] def /minJmono [0 0 400 700] def
/k [0 0 400 700] def
/l [0 0 200 700] def /minLmono [0 0 400 700] def
/m [0 0 400 700] def /minMmono [0 0 400 700] def
/n [0 0 400 700] def
/o [0 0 500 700] def
/p [0 0 400 700] def
/q [0 0 400 700] def
/r [0 0 400 700] def /minRmono [0 0 400 700] def
/s [0 0 400 700] def
/t [0 0 400 700] def /minTmono [0 0 400 700] def
/u [0 0 400 700] def
/v [0 0 500 700] def
/w [0 0 400 700] def /minWmono [0 0 400 700] def
/x [0 0 400 700] def
/y [0 0 400 700] def
/z [0 0 400 700] def
/braceleft [0 0 400 700] def /opencurlymono [0 0 400 700] def
/bar [0 0 400 700] def /pipemono [0 0 400 700] def
/braceright [0 0 400 700] def /closecurlymono [0 0 400 700] def
/asciitilde [0 0 400 700] def
 /Adieresis [0 0 400 700] def  /minAumlautsmallcaps [0 0 400 700] def  /capAumlautmono [0 0 400 700] def
 /Aring [0 0 400 700] def /minAodanishsmallcaps [0 0 400 700] def  /capAodanishmono [0 0 400 700] def
 /Ccedilla [0 0 400 700] def /ccedillamallcaps [0 0 400 700] def  /Ccedillamono [0 0 400 700] def
 /Eacute [0 0 400 700] def /eacutesmallcaps [0 0 400 700] def  /capEacutemono [0 0 400 700] def
 /Ntilde [0 0 400 700] def /minNtildesmallcaps [0 0 400 700] def  /capNtildemono [0 0 400 700] def
 /Odieresis [0 0 400 700] def /minOumlautsmallcaps [0 0 400 700] def  /capOumlautmono [0 0 400 700] def
 /Udieresis [0 0 400 700] def /minUumlautsmallcaps [0 0 400 700] def  /capUumlautmono [0 0 400 700] def
 /aacute [0 0 400 700] def  /aacutemono [0 0 400 700] def
 /agrave  [0 0 400 700] def  /minAgravemono [0 0 400 700] def
 /acircumflex  [0 0 400 700] def  /minAcircmono [0 0 400 700] def
 /adieresis [0 0 400 700] def /minAumlautmono [0 0 400 700] def
 /atilde  [0 0 400 700] def  /minAtildemono [0 0 400 700] def
 /minAoe [0 0 400 700] def  /minAoemono [0 0 400 700] def
 /ccedilla [0 0 400 700] def /ccedillamono [0 0 400 700] def
 /eacute [0 0 400 700] def /eacutemono [0 0 400 700] def
 /egrave [0 0 400 700] def  /minEgravemono [0 0 400 700] def
 /ecircumflex [0 0 400 700] def  /minEcircmono [0 0 400 700] def
 /edieresis [0 0 400 700] def  /minEumlautmono [0 0 400 700] def
 /iacute [0 0 400 700] def  /iacutemono [0 0 400 700] def
 /igrave [0 0 400 700] def  /minIgravemono [0 0 400 700] def
 /icircumflex  [0 0 400 700] def /minIcircmono [0 0 400 700] def
 /idieresis [0 0 400 700] def  /minIumlautmono [0 0 400 700] def
 /ntilde [0 0 400 700] def /minNtildemono [0 0 400 700] def
 /oacute [0 0 400 700] def /minOacutemono [0 0 400 700] def
 /ograve  [0 0 400 700] def  /minOgravemono [0 0 400 700] def
 /ocircumflex   [0 0 400 700] def  /ocircumflex   [0 0 400 700] def
 /odieresis [0 0 400 700] def /minOumlautmono [0 0 400 700] def
 /otilde [0 0 400 700] def /minOtildemono [0 0 400 700] def
 /uacute [0 0 400 700] def /uacutemono [0 0 400 700] def
 /ugrave [0 0 400 700] def /minUgravemono [0 0 400 700] def
 /ucircumflex [0 0 400 700] def /minUcircmono [0 0 400 700] def
 /udieresis  [0 0 400 700] def /minUumlautmono [0 0 400 700] def
 /dagger [0 0 400 700] def
 /degree [0 0 400 700] def
 /cent [0 0 400 700] def
 /sterling [0 0 400 700] def
 /section [0 0 400 700] def
 /bullet [0 0 400 700] def
 /paragraph [0 0 400 700] def
 /germandbls [0 0 400 700] def
 /copyright [0 0 400 700] def  /copyrightmono [0 0 400 700] def
 /registered [0 0 400 700] def  /registeredmono [0 0 400 700] def
 /trademark [0 0 400 700] def  /trademarkmono [0 0 400 700] def
 /acute [0 0 400 700] def
 /dieresis [0 0 400 700] def
 /notequal [0 0 400 700] def
 /AE [0 0 400 700] def  /capAEmono [0 0 400 700] def
 /Oslash  [0 0 400 700] def  /Oslash  [0 0 400 700] def
 /infinity [0 0 400 700] def
 /plusminus [0 0 400 700] def
 /lessequal [0 0 400 700] def
 /greaterequal [0 0 400 700] def
 /yen [0 0 400 700] def
 /mu [0 0 400 700] def
 /partialdiff [0 0 400 700] def
 /summation [0 0 400 700] def  /capSimgamono [0 0 400 700] def
 /product  [0 0 400 700] def
 /pi  [0 0 400 700] def
 /integral [0 0 400 700] def
 /ordfeminine [0 0 400 700] def
 /ordmasculine [0 0 400 700] def
 /uni03A9 [0 0 400 700] def /capOmegamono [0 0 400 700] def
 /ae [0 0 400 700] def /minAEsmallcaps [0 0 400 700] def /minAEmono [0 0 400 700] def
 /oslash  [0 0 400 700] def
 /questiondown [0 0 400 700] def
  /exclamdown [0 0 400 700] def
 /logicalnot [0 0 400 700] def
 /radical [0 0 400 700] def
 /florin [0 0 400 700] def
 /approxequal [0 0 400 700] def
 /Delta [0 0 400 700] def
 /guillemotleft [0 0 400 700] def
 /guillemotright [0 0 400 700] def
 /elipsis [0 0 400 700] def
 /uni00A0 [0 0 400 700] def
 /Agrave [0 0 400 700] def /minAgravesmallcaps [0 0 400 700] def  /capAgravemono [0 0 400 700] def
 /Atilde [0 0 400 700] def /minAtildesmallcaps [0 0 400 700] def  /Atildemono [0 0 400 700] def
 /Otilde [0 0 400 700] def /minOtildesmallcaps [0 0 400 700] def  /capOtildemono [0 0 400 700] def
 /OE [0 0 400 700] def /capOEsmallcaps [0 0 400 700] def  /capOEmono [0 0 400 700] def
 /oe [0 0 400 700] def /minOEsmallcaps [0 0 400 700] def  /minOEmono [0 0 400 700] def
 /endash [0 0 400 700] def /ndashmono [0 0 400 700] def 
 /emdash [0 0 400 700] def  /mdashmono [0 0 400 700] def
 /quotedbl [0 0 400 700] def
 /quotedblleft [0 0 400 700] def
 /quotedblright [0 0 400 700] def
 /quoteleft [0 0 400 700] def  /singleopentopquotemono [0 0 400 700] def
 /quoteright [0 0 400 700] def  /singleclosetopquotemono [0 0 400 700] def
 /divide [0 0 400 700] def
 /lozenge [0 0 400 700] def
 /ydieresis [0 0 400 700] def /minYumlautmono [0 0 400 700] def  
 /Ydieresis [0 0 400 700] def /minYumlautsmallcaps [0 0 400 700] def  /capYumlautmono [0 0 400 700] def
 /fraction [0 0 400 700] def
 /euro [0 0 400 700] def /euromono [0 0 400 700] def 
 /quilsinglleft [0 0 400 700] def /singleopenquotemono [0 0 400 700] def
 /quilsinglright  [0 0 400 700] def /singleclosequotemono [0 0 400 700] def
 /uniFB01 [0 0 400 700] def
 /uniFB02 [0 0 400 700] def
 /daggerdbl [0 0 400 700] def
 /periodcentered [0 0 400 700] def
 /quotesinglbase [0 0 400 700] def /singleopenbottomquotemono [0 0 400 700] def
 /quotedblbase [0 0 400 700] def /openbottomquotemono [0 0 400 700] def
 /perthousand [0 0 400 700] def /permillemono [0 0 400 700] def
 /Acircumflex  [0 0 400 700] def /minAcircsmallcaps [0 0 400 700] def  /capAcircmono [0 0 400 700] def
 /Ecircumflex [0 0 400 700] def /minEcircsmallcaps [0 0 400 700] def  /capEcircmono [0 0 400 700] def
 /Aacute [0 0 400 700] def /aacutesmallcaps [0 0 400 700] def  /capAacutemono [0 0 400 700] def
 /Edieresis [0 0 400 700] def /minEumlautsmallcaps [0 0 400 700] def  /capEumlautmono [0 0 400 700] def
 /Egrave  [0 0 400 700] def /minEgravesmallcaps [0 0 400 700] def  /capEgravemono [0 0 400 700] def
 /Iacute [0 0 400 700] def /iacutesmallcaps [0 0 400 700] def  /capIcautemono [0 0 400 700] def
 /Icircumflex [0 0 400 700] def /minIcircsmallcaps [0 0 400 700] def  /capIcircmono [0 0 400 700] def
 /Idieresis [0 0 400 700] def /minIumlautsmallcaps [0 0 400 700] def  /capIumlautmono [0 0 400 700] def
 /Igrave  [0 0 400 700] def /minIgravesmallcaps [0 0 400 700] def  /capIgravemono [0 0 400 700] def
 /Oacute [0 0 400 700] def /minOcautesmallcaps [0 0 400 700] def  /capOacutemono [0 0 400 700] def
 /Ocircumflex [0 0 400 700] def /minOcircsmallcaps [0 0 400 700] def  /capOcircmono [0 0 400 700] def
 /uniF8FF [0 0 400 700] def 
 /Ograve  [0 0 400 700] def /minOgravesmallcaps [0 0 400 700] def  /capOgravemono [0 0 400 700] def
 /Uacute [0 0 400 700] def /minOacutesmallcaps [0 0 400 700] def  /capOacutemono [0 0 400 700] def
 /Ucircumflex  [0 0 400 700] def /minUcircsmallcaps [0 0 400 700] def  /capUcircmono [0 0 400 700] def
 /Ugrave [0 0 400 700] def /minUgravesmallcaps [0 0 400 700] def  /capUgravemono [0 0 400 700] def
 /dotlessi [0 0 400 700] def 
 /circumlfex [0 0 400 700] def
 /tilde [0 0 400 700] def
 /macron [0 0 400 700] def
 /breve [0 0 400 700] def
 /dotaccent [0 0 400 700] def
 /ring [0 0 400 700] def
 /cedilla [0 0 400 700] def
 /hungarumlaut [0 0 400 700] def
 /ogonek [0 0 400 700] def
 /caron [0 0 400 700] def


end

/CharacterDefs 512 dict def CharacterDefs begin
/.notdef { } def
/space { } def
/exclam { 0 700 move 0 200 line 0 0 dot fill }  def
/exclamationmono { 200 700 move 200 200 line 200 0 dot fill }  def
/quotedbl { 0 700 move 0 550 line 200 700 move 200 550 line fill }  def
/quotemono { 100 700 move 100 550 line 300 700 move 300 550 line fill }  def
/numbersign { 0 500 move 400 500 line 0 200 move 400 200 line
100 700 move 100 0 line 300 700 move 300 0 line
fill } def
/dollar { 200 700 move 200 0 line 
 400 500 move 90 180 200 600 turn 180 270 0 500  turn
 270 315 200 350 turn 315 270 400 200 turn 
 270 180 200 100 turn 180 90 0 200 turn
fill }  def
/percent { 600 700 move 0 0 line
250 575 move 90 180 125 700 turn 180 270 0 575 turn
270 0 125 450 turn 0 90 250 575 turn
350 125 move 90 0 475 250 turn 0 270 600 125 turn
270 180 475 0 turn 180 90 350 125 turn
fill}  def
/percentmono { 400 700 move 0 0 line
160 575 move 90 180 80 700 turn 180 270 0 575 turn
270 0 80 425 turn 0 90 160 575 turn
240 125 move 90 0 320 250 turn 0 270 400 125 turn
270 180 320 0 turn 180 90 240 125 turn
fill}  def
/ampersand { 500 200 move 225 180 250 0 turn
180 90 0 200 turn 90 45 200 400 turn 
45 90 325 550 turn
90 180 200 700 turn
180 270 100 550  turn
270 315 250 250 turn 500 0 line
fill}  def
/ampersandmono { 400 200 move 225 180 200 0 turn
180 90 0 200 turn 90 45 160 400 turn 
45 90 260 550 turn
90 180 160 700 turn
180 270 80 550  turn
270 315 200 250 turn 500 0 line
fill}  def
/quotesingle { 0 700 move 0 550 line fill}  def
/singlequotemono { 200 700 move 200 550 line fill}  def
/parenleft  { 200 700 move 210 270 0 300 turn 270 330 200 -100 turn fill } def
/openparanthesismono { 300 800 move 210 270 100 350 turn 270 330 300 -100 turn fill } def
/parenright { 0 700 move 330 270 200 300 turn 270 210 0 -100 turn fill } def
/closeparanthesismono { 100 800 move 330 270 300 350 turn 270 210 100 -100 turn fill } def
/asterisk { 0 300 move 400 300 line 
100 472 move 300 128 line
300 472 move 100 128 line
fill}  def
/plus { 0 350 move 400 350 line 200 550 move 200 150 line fill }  def
/comma { 0 0 move 270 240 -100 -150 turn fill }  def
/commamono { 200 0 move 270 240 100 -150 turn fill }  def
/hyphen { 0 350 move 200 350 line fill } def
/hyphenmono { 100 350 move 300 350 line fill } def
/period { 0 0 dot fill } def
/pointmono { 200 0 dot fill } def
/slash { 0 0 move 400 700 line fill } def
/at { 
500 350 move 
90 180 325 550 turn
180 270 150 350 turn
270 0 325 150 turn
0 90 500 350 turn
500 500 move 
500 300 line
270 0 600 150 turn
0 90 700 300 turn
90 180 350 720 turn
180 270 0 350 turn
270 0 350 -20 turn
0 30 500 25 turn 
fill}  def
/atmono { 
500 7 div 4 mul  350 move 
90 180 325 7 div 4 mul 550 turn
180 270 150 7 div 4 mul 350 turn
270 0 325 7 div 4 mul 150 turn
0 90 500 7 div 4 mul 350 turn
500 7 div 4 mul 500 move 
500 7 div 4 mul 300 line
270 0 600 7 div 4 mul 150 turn
0 90 700 7 div 4 mul 300 turn
90 180 350 7 div 4 mul 720 turn
180 270 0 7 div 4 mul 350 turn
270 0 350 7 div 4 mul -20 turn
0 30 500 7 div 4 mul 25 turn 
fill}  def
/zero  {  200 720 move 
180 270 0 350 turn 
270 0 200 -20 turn
0 90 400 350 turn
90 180 200 720 turn
fill } def
/num0mono {  200 720 move 
180 270 0 350 turn 
270 0 200 -20 turn
0 90 400 350 turn
90 180 200 720 turn
200 350 dot
fill } def
/num0smallcaps {  200 500 move 
180 270 0 250 turn 
270 0 200 0 turn
0 90 400 250 turn
90 180 200 500 turn
fill } def
/one  {  100 500 move
400 700 line
400 0 line
fill } def
/num1mono {  0 500 move
300 700 line
300 0 line
200 0 move 400 0 line
fill } def
/num1smallcaps {  100 350 move
400 500 line
400 0 line
fill } def
/two  {  0 550 move 90 0 200 720 turn
0 270 400 550 turn 
270 225 200 200 turn
0 0 line 400 0 line
fill } def
/num2smallcaps {  0 350 move 90 0 200 500 turn
0 270 400 350 turn 
270 225 200 0 turn
0 -200 line 400 -200 line
fill } def
/three  { 0 550 move 90 0 200 720 turn
0 270 400 525 turn 
270 180 200 350 turn
0 270 400 175 turn 
270 180 200 -20 turn
180 90 0 150 turn
fill } def
/num3smallcaps { 0 350 move 90 0 200 500 turn
0 270 400 325 turn 
270 180 200 150 turn
0 270 400 -25 turn 
270 180 200 -200 turn
180 90 0 -50 turn
fill } def
/four {  300 700 move 0 200 line 400 200 line
300 700 move 300 0 line
fill } def
/num4smallcaps {  300 500 move 0 0 line 400 000 line
300 500 move 300 -200 line
fill } def
/five {  400 700 move 0 700 line
0 400 line 200 400 line
0 270 400 200 turn
270 180 200 0 turn
180 150 0 50 turn 
fill } def
/num5smallcaps {  400 500 move 0 500 line
0 200 line 200 200 line
0 270 400 0 turn
270 180 200 -200 turn
180 150 0 -150 turn 
fill } def
/six {  400 550 move 90 180 200 720 turn
180 270 0 400 turn 0 200 line
270 0 200 -20 turn
0 90 400 200 turn 
90 180 200 400 turn
180 270 0 200 turn 
fill } def
/num6smallcaps {  10 dict begin
/tangentx 135 cos 200 mul 200 add def
/tangenty 135 sin 250 mul 250 add def
tangentx 300 add tangenty 375 add move
tangentx tangenty line
end
0 200 move
270 0 200 0 turn
0 90 400 250 turn 
90 180 200 500 turn
180 270 0 250 turn 
fill } def
/seven {  0 700 move 400 700 line 100 0 line
fill } def
/num7smallcaps {  0 500 move 400 500 line 100 -200 line
fill } def
/eight {  200 380 move 0 90 375 540 turn
90 180 200 720 turn
180 270 25 540 turn
270 0 200 380 turn
0 270 400 190 turn
270 180 200 -20 turn 
180 90 0 190 turn 
90 0 200 380 turn
fill } def
/num8smallcaps {  200 380 move 0 90 375 540 turn
90 180 200 720 turn
180 270 25 540 turn
270 0 200 380 turn
0 270 400 190 turn
270 180 200 -20 turn 
180 90 0 190 turn 
90 0 200 380 turn
fill } def
/nine {  400 500 move
90 180 200 720 turn
180 270 0 500 turn
270 0 200 300 turn
0 90 400 500 turn
400 300 line
270 180 200 -20 turn
180 90 0 150 turn
fill } def
/num9smallcaps {  400 300 move
90 180 200 500 turn
180 270 0 250 turn
270 0 200 0 turn
0 90 400 250 turn
10 dict begin
/tangentx 315 cos 200 mul 200 add def
/tangenty 315 sin 250 mul 250 add def
tangentx 300 sub tangenty 375 sub move
tangentx tangenty line
end
fill } def
/colon { 0 0 dot 0 300 dot }  def
/colonmono { 200 0 dot 200 300 dot }  def
/semicolon { 0 0 move 270 240 -100 -150 turn 0 300 dot fill} def
/semicolonmono { 200 0 move 270 240 100 -150 turn 200 300 dot fill} def
/less { 400 450 move 0 350 line 400 250 line fill } def
/equal { 0 450 move 400 450 line 0 250 move 400 250 line fill}  def
/greater { 0 450 move 400 350 line 0 250 line fill }  def
/question { 0 500 move 90 0 200 720 turn 0 270 400 500 turn
270 180 250 350 turn
180 270 200 300 turn  200 200 line
200 0 dot
fill}  def
/A { 0 0 move 250 700 line 500 0 line
250 0.3 mul 
700 0.3 mul move 
250 0.3 mul neg 500 add 
700 0.3 mul line 
fill } def
/capAmono { 0 0 move 200 700 line 400 0 line
200 0.3 mul 
700 0.3 mul move 
200 0.3 mul neg 400 add 
700 0.3 mul line 
fill } def
/minAsmallcaps { 0 0 move 250 500 line 500 0 line
250 0.3 mul 
500 0.3 mul move 
250 0.3 mul neg 500 add 
500 0.3 mul line 
fill } def
/capAsmall { 0 0 move 250 600 line 500 0 line
250 0.3 mul 
600 0.3 mul move 
250 0.3 mul neg 500 add 
600 0.3 mul line 
fill } def
/capAmonosmall { 0 0 move 200 600 line 400 0 line
250 0.3 mul 
600 0.3 mul move 
200 0.3 mul neg 400 add 
600 0.3 mul line 
fill } def
/B { 0 700 moveto 0 0 line 
0 700 move 300 700 line 0 270 450 550 turn
270 180 300 400 turn 0 400 line
300 400 move 0 270 500 200 turn 270 180 300 0 turn 0 0 line
fill } def
/capBmono { 0 700 moveto 0 0 line 
0 700 move 200 700 line 0 270 350 550 turn
270 180 200 400 turn 0 400 line
200 400 move 0 270 400 200 turn 270 180 200 0 turn 0 0 line
fill } def
/minBsmallcaps { 0 500 moveto 0 0 line 
0 500 move 300 500 line 0 270 450 400 turn
270 180 300 300 turn 0 300 line
300 300 move 0 270 500 150 turn 270 180 300 0 turn 0 0 line
fill } def
/C { 500 525 move 
90 180 250 720 turn 180 270 0 350 turn
270 0 250 -20 turn 0 90 500 175 turn 
fill } def
/capCmono { 400 525 move 
90 180 200 720 turn 180 270 0 350 turn
270 0 200 -20 turn 0 90 400 175 turn 
fill } def
/minCsmallcaps { 500 375 move 
90 180 250 500 turn 180 270 0 250 turn
270 0 250 0 turn 0 90 500 125 turn 
fill } def
/D { 0 700 move 0 0 line
0 700 move 200 700 line 0 270 500 425 turn
500 275 line 270 180 200 0 turn
0 0 line 
fill } def
/capDmono { 0 700 move 0 0 line
0 700 move 100 700 line 0 270 400 425 turn 
400 275 line 270 180 100 0 turn
0 0 line
fill } def
/minDsmallcaps { 0 500 move 0 0 line
0 500 move 200 500 line 0 270 500 305 turn
500 195 line 270 180 200 0 turn
0 0 line
fill } def
/E { 0 700 move 0 0 line
0 700 move 500 700 line
0 350 move 350 350 line
0 0 move 500 0 line
fill } def
/capEmono { 0 700 move 0 0 line
0 700 move 400 700 line
0 350 move 300 350 line
0 0 move 400 0 line
fill } def
/minEsmallcaps { 0 500 move 0 0 line
0 500 move 500 500 line
0 250 move 350 250 line
0 0 move 500 0 line
fill } def
/capEsmall { 0 600 move 0 0 line
0 600 move 500 600 line
0 300 move 350 300 line
0 0 move 500 0 line
fill } def
/capEmonosmall { 0 600 move 0 0 line
0 600 move 400 600 line
0 300 move 300 300 line
0 0 move 400 0 line
fill } def
/F { 0 700 move 0 0 line
0 700 move 500 700 line
0 350 move 350 350 line
fill } def
/capFmono { 0 700 move 0 0 line
0 700 move 400 700 line
0 350 move 300 350 line
fill } def
/minFsmallcaps { 0 500 move 0 0 line
0 500 move 500 500 line
0 250 move 350 250 line
fill } def
/G { 500 525 move
90 180 250 720 turn
180 270 0 350 turn
270 0 250 -20 turn
0 90 500 300 turn
300 300 line 
fill } def
/capGmono { 400 525 move
90 180 200 720 turn
180 270 0 350 turn
270 0 200 -20 turn
0 90 400 300 turn
240 300 line 
fill } def
/minGsmallcaps { 500 375 move
90 180 250 500 turn
180 270 0 250 turn
270 0 250 0 turn
0 90 500 205 turn
300 205 line 
fill } def
/H { 0 700 move 0 0 line
500 700 move 500 0 line
0 350 move 500 350 line
fill } def
/capHmono { 0 700 move 0 0 line
400 700 move 400 0 line
0 350 move 400 350 line
fill } def
/minHsmallcaps { 0 500 move 0 0 line
500 500 move 500 0 line
0 250 move 500 250 line
fill } def
/I { 0 700 move 0 0 line
fill } def
/capImono { 200 700 move 200 0 line
0 700 move 400 700 line
0 0 move 400 0 line
fill } def
/minIsmallcaps { 0 500 move 0 0 line
fill } def
/capIsmall { 0 600 move 0 0 line
fill } def
/capImonosmall { 200 600 move 200 0 line
0 600 move 400 600 line
0 0 move 400 0 line
fill } def
/J { 400 700 move 400 200 line 
270 180 200 0 turn
180 90 0 175 turn 
fill } def
/minJsmallcaps { 400 500 move 400 150 line 
270 180 200 0 turn
180 90 0 125 turn 
fill } def
/K { 0 700 move 0 0 line
0 350 move 500 700 line
200 350 200 mul 500 div 350 add move 500 0 line
fill } def
/capKmono { 0 700 move 0 0 line
0 350 move 400 700 line
200 350 200 mul 400 div 350 add move 400 0 line
fill } def
/minKsmallcaps { 0 500 move 0 0 line
0 250 move 500 500 line
200 250 250 500 div 200 mul add move 500 0 line
fill } def
/L { 0 700 move 0 0 line 500 0 line
fill } def
/capLmono { 0 700 move 0 0 line 400 0 line
fill } def
/minLsmallcaps { 0 500 move 0 0 line 500 0 line
fill } def
/M { 0 0 move 0 700 line
300 200 line 600 700 line 
600 0 line
fill } def
/capMmono { 0 0 move 0 700 line
200 200 line 400 700 line 
400 0 line
fill } def
/minMsmallcaps { 0 0 move 0 500 line
300 150 line 600 500 line 
600 0 line
fill } def
/N { 0 0 move 0 700 line
500 0 line 500 700 line
fill } def
/capNmono { 0 0 move 0 700 line
400 0 line 400 700 line
fill } def
/minNsmallcaps { 0 0 move 0 500 line
500 0 line 500 500 line
fill } def
/capNsmall { 0 0 move 0 600 line
500 0 line 500 600 line
fill } def
/capNmonosmall { 0 0 move 0 600 line
400 0 line 400 600 line
fill } def
/O  {  300 720 move 
180 270 0 350 turn 
270 0 300 -20 turn
0 90 600 350 turn
90 180 300 720 turn
fill } def
/capOmono {  200 720 move 
180 270 0 350 turn 
270 0 200 -20 turn
0 90 400 350 turn
90 180 200 720 turn
fill } def
/minOsmallcaps {  300 500 move 
180 270 0 250 turn 
270 0 300 0 turn
0 90 600 250 turn
90 180 300 500 turn
fill } def
/capOsmall {  300 600 move 
180 270 0 300 turn 
270 0 300 -20 turn
0 90 600 300 turn
90 180 300 600 turn
fill } def
/capOmonosmall {  200 600 move 
180 270 0 300 turn 
270 0 200 -20 turn
0 90 400 300 turn
90 180 200 600 turn
fill } def
/P  { 0 700 move 0 0 line 
0 700 move 300 700 line
0 270 500 525 turn
270 180 300 350 turn 
0 350 line
fill } def
/capPmono { 0 700 move 0 0 line 
0 700 move 200 700 line
0 270 400 525 turn
270 180 200 350 turn 
0 350 line
fill } def
/minPsmallcaps { 0 500 move 0 0 line 
0 500 move 300 500 line
0 270 500 375 turn
270 180 300 250 turn 
0 250 line
fill } def
/Q  {  300 720 move 
180 270 0 350 turn 
270 0 300 -20 turn
0 90 600 350 turn
90 180 300 720 turn
400 200 move 600 0 line
fill } def
/capQmono {  200 720 move 
180 270 0 350 turn 
270 0 200 -20 turn
0 90 400 350 turn
90 180 200 720 turn
200 200 move 400 0 line
fill } def
/minQsmallcaps {  300 500 move 
180 270 0 250 turn 
270 0 300 0 turn
0 90 600 250 turn
90 180 300 500 turn
450 150 move 600 0 line
fill } def
/R  { 0 700 move 0 0 line
0 700 move 250 700 line
0 270 500 525 turn
270 180 250 350 turn 
0 350 line
250 350 move 500 0 line
fill } def
/capRmono { 0 700 move 0 0 line
0 700 move 200 700 line
0 270 400 525 turn
270 180 200 350 turn 
0 270 line
200 350 move 400 0 line
fill } def
/minRsmallcaps { 0 500 move 0 0 line
0 500 move 250 500 line
0 270 500 375 turn
270 180 250 250 turn 
0 250 line
250 250 move 500 0 line
fill } def
/S  { 500 525 move 
90 180 250 720 turn
180 270 0 525 turn 
270 0 240 370 turn 260 370 line
0 270 500 175 turn
270 180 250 -20 turn
180 90 0 175 turn 
fill } def
/capSmono { 400 525 move 
90 180 200 720 turn
180 270 0 525 turn 
270 0 190 370 turn 210 370 line
0 270 400 175 turn
270 180 200 -20 turn
180 90 0 175 turn 
fill } def
/minSsmallcaps { 500 375 move 
90 180 250 500 turn
180 270 0 375 turn 
270 0 240 265 turn 260 265 line
0 270 500 125 turn
270 180 250 0 turn
180 90 0 125 turn 
fill } def
/T { 250 700 move 250 0 line
500 700 move 0 700 line
fill } def 
/capTmono { 200 700 move 200 0 line
400 700 move 0 700 line
fill } def 
/minTsmallcaps { 250 500 move 250 0 line
500 500 move 0 500 line
fill } def 
/U { 0 700 move 0 250 line
270 0 250 -20 turn
0 90 500 250 turn
500 700 line
fill } def 
/capUmono { 0 700 move 0 250 line
270 0 200 -20 turn
0 90 400 250 turn
400 700 line
fill } def 
/minUsmallcaps { 0 500 move 0 175 line
270 0 250 0 turn
0 90 500 175 turn
500 500 line
fill } def 
/capUsmall { 0 600 move 0 250 line
270 0 250 -20 turn
0 90 500 250 turn
500 600 line
fill } def 
/capUmonosmall { 0 600 move 0 250 line
270 0 200 -20 turn
0 90 400 250 turn
400 600 line
fill } def 
/V { 0 700 move 250 0 line 500 700 line
fill } def 
/capVmono { 0 700 move 200 0 line 400 700 line
fill } def 
/minVsmallcaps { 0 500 move 250 0 line 500 500 line
fill } def 
/W { 0 700 move 200 0 line 350 500 line
500 0 line 700 700 line
fill } def 
/capWmono { 0 700 move 140 0 line 200 300 line
260 0 line 400 700 line
fill } def 
/minWsmallcaps { 0 500 move 200 0 line 350 350 line
500 0 line 700 500 line
fill } def 
/X { 0 700 move 500 0 line
500 700 move 0 0 line 
fill } def 
/capXmono { 0 700 move 400 0 line
400 700 move 0 0 line 
fill } def 
/minXsmallcaps { 0 500 move 500 0 line
500 500 move 0 0 line 
fill } def 
/Y { 0 700 move 250 300 line 250 0 line
250 300 move 500 700 line
fill } def 
/capYmono { 0 700 move 200 300 line 200 0 line
200 300 move 400 700 line
fill } def 
/minYsmallcaps { 0 500 move 250 225 line 250 0 line
250 225 move 500 500 line
fill } def 
/capYsmall { 0 600 move 250 260 line 250 0 line
250 260 move 500 600 line
fill } def 
/capYmonosmall { 0 600 move 200 260 line 200 0 line
200 260 move 400 600 line
fill } def 
/Z { 0 700 move 500 700 line
0 0 line 500 0 line
fill } def
/capZmono { 0 700 move 400 700 line
0 0 line 400 0 line
fill } def
/minZsmallcaps { 0 500 move 500 500 line
0 0 line 500 0 line
fill } def
/bracketleft { 200 700 move 0 700 line 0 -100 line 200 -100 line fill }  def
/openbracketmono { 300 800 move 100 800 line 100 -100 line 300 -100 line fill }  def
/backslash  { 0 700 move 400 0 line fill } def
/bracketright  { 0 700 move 200 700 line 200 -100 line 0 -100 line fill } def
/closebracketmono  { 100 800 move 300 800 line 300 -100 line 100 -100 line fill } def
/asciicircum  { 100 650 move 200 700 line 300 650 line fill } def
/underscore    { 0 0 move 500 0 line fill } def
/underlinemono  { 0 0 move 400 0 line fill } def
/grave  { 100 700 move 300 650 line fill } def
/a {
currentslanted { 400 350 move 400 50 line 400 50 endswash
400 350 move 
90 180 200 500 turn
180 270 0 200 turn
270 0 200 0 turn
0 90 400 200 turn }	
{ 400 350 move
270 180 200 250 turn
180 270 0 125 turn
 270 0 250 0 turn
0 30 400 50 turn
50 450 move
30 0 200 500 turn
% 200 500 line
0 270 400 350 turn 
400 0 line } ifelse
fill } def
/b  {
0 700 move
0 0 line
0 200 move 
90 0 200 500 turn
0 270 400 200 turn
270 180 200 0 turn
180 90 0 200 turn
fill } def
/c  { 
400 350 move
90 180 200 500 turn 
180 270 0 250 turn
270 0 200 0 turn
0 90 400 150 turn
 fill } def
/d  { 400  700 move 
currentslanted { 400 50 line 400 50 endswash } { 400 0 line } ifelse
400 350 move 
90 180 200 500 turn
180 270 0 200 turn
270 0 200 0 turn
0 90 400 200 turn
 fill } def
/e  { 0 250 move 400 250 line
90 180 200 500 turn
180 270 0 250 turn
270 0 200 0 turn
0 45 400 100 turn
fill } def
/f { 
300 650 move 150 180 200 700 turn
180 270 100 550 turn
currentslanted { 100 -50 line 270 180 -20 -200 turn } { 100 0 line } ifelse
0 450 move 300 450 line
fill } def
/minFmono { 
400 700 move
180 270 150 550 turn
150 0 line
50 350 move 400 350 line
fill } def
/g { 400 400 move 
150 180 200 500 turn
180 270 0 250 turn
270 0 200 0 turn 
0 90 400 200 turn
400 500 move 400 -50 line 
270 180 200 -200 turn
180 150 0 -150 turn 
fill } def
/h { 0 700 move 0 0 line
0 200 move 
90 0 200 500 turn 
0 270 400 250 turn
currentslanted { 400 50 line 400 50 endswash } { 400 0 line } ifelse
fill } def
/i { 0 500 0 sub move
currentslanted { 0 50 line 0 50 endswash } { 0 0 line } ifelse 
0 700 dot 
fill } def
/minImono { 0 500 move 200 500 line 200 0 line 0 0 move 400 0 line 
200 700 dot 
fill } def
/minIsmall { 0 500 0 sub move 0 0 line 
fill } def
/j { 100 500 move
100 -50 line
270 180 0 -200 turn 
100 700 dot
fill } def
/minJmono { 200 500 move
200 0 line
270 180 0 -200 turn 
200 700 dot
fill } def
/k { 0 700 move 0 0 line
0 250 move 350 450 line
100 250 200 100 mul 350 div add move
400 0 line 
fill } def
/l { 0 700 move 
currentslanted { 0 50 line 0 50 endswash } { 0 0 line } ifelse
fill } def
/minLmono { 0 700 move 200 700 line 200 0 line 400 0 line
fill } def
/m { 0 500 move 0 0 line
0 300 move
90 0 150 500 turn
0 270 300 300 turn
300 0 line
300 300 move
90 0 450 500 turn
0 270 600 300 turn
currentslanted { 600 50 line 600 50 endswash } { 600 0 line } ifelse
fill } def
/minMmono { 0 500 move 0 0 line
0 300 move
90 0 100 500 turn
0 270 200 300 turn
200 0 line
200 300 move
90 0 300 500 turn
0 270 400 300 turn
400 0 line
fill } def
/n { 0 500 move 0 0 line
0 200 move 
90 0 200 500 turn 
0 270 400 250 turn
currentslanted { 400 50 line 400 50 endswash } { 400 0 line } ifelse
fill } def
/o {  200 500 move 
180 270 0 250 turn 
270 0 200 0 turn
0 90 400 250 turn
90 180 200 500 turn
fill } def
/p { 0 500 move 0 -200 line
0 200 move 
90 0 200 500 turn
0 270 400 200 turn
270 180 200 0 turn
180 90 0 200 turn
fill } def
/q { 400 500 move 400 -200 line
400 350 move 
90 180 200 500 turn
180 270 0 200 turn
270 0 200 0 turn
0 90 400 200 turn
fill } def
/r { 0 500 move 0 0 line
0 250 move 90 0 300 500  turn
fill } def
/minRmono { 0 500 move 0 0 line
0 250 move 90 0 400 500  turn
fill } def
/s { 400 400 move
120 180 200 500 turn
180 270 0 375 turn
270 0 210 250 turn 240 250 line
0 270 400 125 turn
270 180 200 0 turn
180 120 0 100 turn
fill } def
/t { 100 700 move 100 150 line
270 0 250 0 turn 0 90 400 150 turn  
0 450 move 300 450 line 
fill } def
/minTmono { 200 700 move 200 150 line
270 0 400 0 turn
50 500 move 350 500 line 
fill } def
/u { 0 500 move 0 200 line
270 0 200 0 turn
0 90 400 200 turn
400 500 move
currentslanted { 400 50 line 400 50 endswash } { 400 0 line } ifelse
fill } def
/v { 0 500 move 200 0 line
currentslanted { 500 150 atan 90 400 500 turn } { 400 500 line } ifelse
fill } def 
/w { 0 500 move 150 0 line 300 500 line
450 0 line 
currentslanted { 500 150 atan 90 600 500 turn } { 600 500 line } ifelse
fill } def
/minWmono { 0 500 move 100 0 line 200 500 line
300 0 line 400 500 line
fill } def
/x { 0 500 move 400 0 line
0 0 move 400 500 line
fill } def
/y { 0 500 move 200 0 line 
currentslanted 
{ 100 -200 move 200 0 line 60 90 400 500 turn 
} { 400 500 move
% calculate line so that it does cross
400 200 500 div 700 mul sub 
-200 line } ifelse
fill } def
/z { 0 500 move 400 500 line
0 0 line 400 0 line
fill } def

/braceleft  { 300 700 move 180 270 150 600 turn 150 400 line 270 180 0 300 turn
0 270 150 200 turn 150 0 line 270 0 300 -100 turn
fill } def
/opencurlymono  { 350 800 move 180 270 200 700 turn 200 450 line 270 180 50 350 turn
0 270 200 250 turn 200 0 line 270 0 350 -100 turn
fill } def
/bar { 0 700 move 0 -100 line fill } def
/pipemono  { 200 800 move 200 -100 line fill } def
/braceright  { 0 700 move 0 270 150 600 turn 150 400 line 270 0 300 300 turn
180 270 150 200 turn 150 0 line 270 180 0 -100 turn
fill } def
/closecurlymono  { 50 800 move 0 270 200 700 turn 200 450 line 270 0 350 350 turn
180 270 200 250 turn 200 0 line 270 180 50 -100 turn
fill } def
/asciitilde  { 0 350 move 45 0 100 400 turn 0 315 200 350 turn 315 0 300 300 turn 0 45 400 350 turn
fill } def

/minacute { /accentoffset characterwidth 500 sub 2 div def
accentoffset 0 translate
/characterwidth 500 def 100 650 move 300 700 line fill 
accentoffset neg 0 translate } def
/capacute { /accentoffset characterwidth 600 sub 2 div def
accentoffset 0 translate
/characterwidth 600 def 150 750 move 350 800 line fill
accentoffset neg 0 translate } def
/capacutemono { /accentoffset characterwidth 500 sub 2 div def
accentoffset 0 translate
/characterwidth 500 def 100 750 move 300 800 line fill 
accentoffset neg 0 translate } def

/mingrave { /accentoffset characterwidth 500 sub 2 div def 
accentoffset 0 translate
/characterwidth 500 def 100 700 move 300 650 line fill 
accentoffset neg 0 translate } def
/capgrave { /accentoffset characterwidth 600 sub 2 div def 
accentoffset 0 translate
/characterwidth 600 def 150 800 move 350 750 line fill
accentoffset neg 0 translate } def
/capgravemono { /accentoffset characterwidth 500 sub 2 div def 
accentoffset 0 translate
/characterwidth 500 def 100 800 move 300 750 line fill 
accentoffset neg 0 translate } def

/mincirc  { /accentoffset characterwidth 500 sub 2 div def 
accentoffset 0 translate
/characterwidth 500 def 100 650 move 200 700 line 300 650 line fill 
accentoffset neg 0 translate } def
/capcirc { /accentoffset characterwidth 600 sub 2 div def 
accentoffset 0 translate
/characterwidth 600 def 150 750 move 250 800 line 350 750 line fill 
accentoffset neg 0 translate } def
/capcircmono { accentoffset characterwidth 500 sub 2 div def 
accentoffset 0 translate
/characterwidth 500 def 100 750 move 200 800 line 300 750 line fill 
accentoffset neg 0 translate } def

/minumlaut { /accentoffset characterwidth 500 sub 2 div def 
accentoffset 0 translate
/characterwidth 500 def 100 650 dot 300 650 dot fill 
accentoffset neg 0 translate } def
/capumlaut { /accentoffset characterwidth 600 sub 2 div def 
accentoffset 0 translate
/characterwidth 600 def 150 750 dot 350 750 dot fill 
accentoffset neg 0 translate } def
/capumlautmono { /accentoffset characterwidth 500 sub 2 div def 
accentoffset 0 translate
/characterwidth 500 def 100 750 dot 300 750 dot fill 
accentoffset neg 0 translate } def


/mincedille { /characterwidth 500 def 200 0 move 200 -50 line 0 270 300 -120 turn 270 180 200 -190 turn fill } def
/capcedille { /characterwidth 600 def 250  -20 move 250 -50 line 0 270 300 -120 turn 270 180 250 -190 turn fill } def
/capcedillemono { /characterwidth 500 def 200  -20 move 20 -50 line 0 270 300 -120 turn 270 180 250 -190 turn fill } def

/mintilde  { /accentoffset characterwidth 500 sub 2 div def 
accentoffset 0 translate
 /characterwidth 500 def 0 700 move 45 0 100 750 turn 0 315 200 700 turn 315 0 300 650 turn 0 45 400 700 turn fill 
 accentoffset neg 0 translate } def
/captilde { /accentoffset characterwidth 600 sub 2 div def 
accentoffset 0 translate
/characterwidth 600 def 50 750 move 45 0 150 800 turn 0 315 250 750 turn 315 0 350 700 turn 0 45 450 750 turn fill 
accentoffset neg 0 translate } def
/captildemono { /accentoffset characterwidth 500 sub 2 div def 
accentoffset 0 translate
/characterwidth 500 def 0 750 move 45 0 100 800 turn 0 315 200 750 turn 315 0 300 700 turn 0 45 400 750 turn fill 
accentoffset neg 0 translate } def


 /Adieresis { CharacterDefs /capAsmall get exec CharacterDefs /capumlaut get exec } def
 /minAumlautsmallcaps { CharacterDefs /minAsmallcaps get exec CharacterDefs /minumlaut get exec } def
 /capAumlautmono { CharacterDefs /capAmonosmall get exec CharacterDefs /capumlautmono get exec } def
 /Aring { CharacterDefs /minAsmallcaps get exec  
 250 800 move 180 270 150 700 turn 270 0 250 600 turn 0 90 350 700 turn 90 180 250 800 turn fill  
   } def
 /minAodanishsmallcaps { CharacterDefs /minAsmallcaps get exec  
 250 750 move 180 270 150 650 turn 270 0 250 550 turn 0 90 350 650 turn 90 180 250 750 turn fill  
   } def
 /capAodanishmono { CharacterDefs /capAmonosmall get exec  
 200 800 move 180 270 100 700 turn 270 0 200 600 turn 0 90 300 700 turn 90 180 200 800 turn fill  
   } def
 /Ccedilla { CharacterDefs /C get exec CharacterDefs /capcedille get exec } def
 /ccedillasmallcaps { CharacterDefs /minCsmallcaps get exec CharacterDefs /capcedille get exec } def
 /Ccedillamono { CharacterDefs /capCmono get exec CharacterDefs /capcedillemono get exec } def
 /Eacute { CharacterDefs /capEsmall get exec CharacterDefs /capacute get exec } def
 /eacutesmallcaps { CharacterDefs /minEsmallcaps get exec CharacterDefs /minacute get exec } def
 /capEacutemono { CharacterDefs /capEmonosmall get exec CharacterDefs /capacutemono get exec } def
 /Ntilde { CharacterDefs /capNsmall get exec CharacterDefs /captilde get exec } def
 /minNtildesmallcaps { CharacterDefs /minNsmallcaps get exec CharacterDefs /captilde get exec } def
 /capNtildemono { CharacterDefs /capNmonosmall get exec CharacterDefs /captildemono get exec } def
 /Odieresis { CharacterDefs /capOsmall get exec CharacterDefs /capumlaut get exec } def
 /minOumlautsmallcaps { CharacterDefs /minOsmallcaps get exec CharacterDefs /minumlaut get exec } def
 /capOumlautmono { CharacterDefs /capOmonosmall get exec CharacterDefs /capumlautmono get exec } def
 /Udieresis { CharacterDefs /capUsmall get exec CharacterDefs /capumlaut get exec } def
 /minUumlautsmallcaps { CharacterDefs /minUsmallcaps get exec CharacterDefs /minumlaut get exec } def
 /capUumlautmono { CharacterDefs /capUmonosmall get exec CharacterDefs /capumlautmono get exec } def
 /aacute { CharacterDefs /a get exec CharacterDefs /minacute get exec } def
 /agrave  { CharacterDefs /a get exec CharacterDefs /mingrave get exec } def
 /acircumflex  { CharacterDefs /a get exec CharacterDefs /mincirc get exec } def
 /adieresis { CharacterDefs /a get exec CharacterDefs /minumlaut get exec } def
 /atilde  { CharacterDefs /a get exec CharacterDefs /mintilde get exec } def
 /minAoe { CharacterDefs /a get exec  200 800 move 180 270 100 700 turn 270 0 200 600 turn 0 90 300 700 turn 90 180 200 800 turn fill   } def
 /ccedilla { CharacterDefs /c  get exec CharacterDefs /mincedille get exec } def
 /eacute { CharacterDefs /e  get exec CharacterDefs /minacute get exec } def
 /egrave { CharacterDefs /e  get exec CharacterDefs /mingrave get exec } def
 /ecircumflex { CharacterDefs /e  get exec CharacterDefs /mincirc get exec } def
 /edieresis { CharacterDefs /e  get exec CharacterDefs /minumlaut get exec } def
 /iacute { CharacterDefs /dotlessi get exec CharacterDefs /minacute get exec } def
 /iacutemono { CharacterDefs /minImono get exec CharacterDefs /minacute get exec } def
 /igrave { CharacterDefs /dotlessi get exec CharacterDefs /mingrave get exec } def
 /minIgravemono { CharacterDefs /minImono get exec CharacterDefs /mingrave get exec } def
 /icircumflex  { CharacterDefs /dotlessi get exec CharacterDefs /mincirc get exec } def
 /minIcircmono { CharacterDefs /minImono get exec CharacterDefs /mincirc get exec } def
 /idieresis { CharacterDefs /dotlessi get exec CharacterDefs /minumlaut get exec } def
 /minIumlautmono { CharacterDefs /minImono get exec CharacterDefs /minumlaut get exec } def
 /ntilde { CharacterDefs /n get exec  CharacterDefs /mintilde get exec } def
 /oacute { CharacterDefs /o get exec CharacterDefs /minacute get exec } def
 /ograve  { CharacterDefs /o get exec CharacterDefs /mingrave get exec } def
 /ocircumflex   { CharacterDefs /o get exec CharacterDefs /mincirc get exec } def
 /odieresis {CharacterDefs /o get exec CharacterDefs /minumlaut get exec } def
 /otilde { CharacterDefs /o get exec CharacterDefs /mintilde get exec } def
 /uacute { CharacterDefs /u get exec CharacterDefs /minacute get exec } def
 /ugrave { CharacterDefs /u get exec CharacterDefs /mingrave get exec } def
 /ucircumflex   { CharacterDefs /u get exec CharacterDefs /mincirc get exec } def
 /udieresis  { CharacterDefs /u get exec CharacterDefs /minumlaut get exec } def
 /dagger { 200 700 move 200 0 line 0 500 move 400 500 line fill } def
 /degree { CharacterDefs /ring get exec } def
 /cent { CharacterDefs /c  get exec 200 -100 move 200 600 line fill } def
 /sterling { 400 600 moveto
 150 180 275 700 turn
 180 270 100 500 turn
 100 0 line
 400 0 line
 0 350 move 200 350 line 
 fill } def
 /section { 300 650 move 120 180 200 700 turn 180 270 100 600 turn 270 0 200 500 turn
 0 270 400 350 turn 270 180 200 200 turn 180 90 0 350 turn 90 0 200 500 turn
 200 200 move 0 270 300 100 turn 270 180 200 0 turn 180 120 100 50 turn
 fill } def
 /bullet { 200 450 move 180 270 100 350 turn 270 0 200 250 turn 0 90 300 350 turn 90 180 200 450 move 200 450 dot 
 fill } def
 /paragraph { 200 700 move 200 0 line 400 700 move 400 0 line 
 400 700 move 200 700 line 180 270 0 500 turn 270 0 200 300 turn 200 300 line
 fill  } def
 /germandbls { 0 0 move 0 550 line 90 0 200 700 turn 0 270 400 550 turn 270 180 200 400 turn
 0 270 400 250 turn 400 150 line 270 180 200 0 turn
 fill } def
 /copyright { 
400 500 move 
180 270 250 350 turn
270 0 400 200 turn
350 700 move 180 270 0 350 turn 
270 0 350 0 turn 
0 90 700 350 turn 
90 180 350 700 turn
fill  } def
 /copyrightmono { 
400 7 div 4 mul 500 move 
180 270 250 7 div 4 mul 350 turn
270 0 400 7 div 4 mul 200 turn
350 7 div 4 mul 700 move 
180 270 0 7 div 4 mul 350 turn
270 0 350 7 div 4 mul 0 turn 
0 90 700 7 div 4 mul 350 turn 
90 180 350 7 div 4 mul  700 turn
fill  } def
/registered {
250 500 move 
250 200 line
250 500 move
350 500 line
0 270 450 400 turn
270 180 350 350 turn 
250 350 line
300 350 move 
450 200 line
350 700 move
180 270 0 350 turn
270 0 350 0 turn
0 90 700 350 turn
90 180 350 700 turn
fill } def
/registeredmono {
250 7 div 4 mul 500 move 
250 7 div 4 mul 200 line
250 7 div 4 mul 500 move
350 7 div 4 mul 500 line
0 270 450 7 div 4 mul 400 turn
270 180 350 7 div 4 mul 350 turn 
250 7 div 4 mul 350 line
300 7 div 4 mul 350 move 
450 7 div 4 mul 200 line
350 7 div 4 mul 700 move
180 270 0 7 div 4 mul 350 turn
270 0 350 7 div 4 mul 0 turn
0 90 700 7 div 4 mul 350 turn
90 180 350 7 div 4 mul 700 turn
fill } def
/trademark { 0 700 move 300 700 line 150 700 move 150 400 line 
 400 400 move 400 700 line 500 650 line 600 700 line 600 400 line
fill  } def
/trademarkmono { 0 700 move 200 700 line 100 700 move 100 400 line 
 266 400 move 266 700 line 333 650 line 400 700 line 400 400 line
fill  } def
 /acute { 100 650 move 300 700 line fill } def
 /dieresis { 100 650 dot 300 650 dot fill } def
 /notequal { 0 450 move 400 450 line 0 250 move 400 250 line 50 150 move 350 550 line fill } def
 /AE { 0 0 move 250 700 line 350 700 line 350 0 line
250 0.3 mul 
700 0.3 mul move 
350  
700 0.3 mul line 
250 700 move 700 700 line
350 350 move 550 350 line
350 0 move 700 0 line 
fill
 } def
/minAEsmallcaps { 0 0  7 div 5 mul move 250 700  7 div 5 mul line 350 700  7 div 5 mul line 350 0  7 div 5 mul line
250 0.3 mul 
700 0.3 mul 7 div 5 mul move 
350  
700 0.3 mul 7 div 5 mul line 
250 700 7 div 5 mul move 700 700 7 div 5 mul line
350 350 7 div 5 mul move 550 350 7 div 5 mul line
350 0 7 div 5 mul move 700 0  7 div 5 mul line 
fill
 } def
/capAEmono { 0 0 move 250 7 div 4 mul 700 line 350  7 div 4 mul  700 line 350  7 div 4 mul  0 line
250 0.3 mul  7 div 4 mul 
700 0.3 mul move 
350   7 div 4 mul 
700 0.3 mul line 
250 7 div 4 mul 700 move 700 7 div 4 mul 700 line
350 7 div 4 mul 350 move 550 7 div 4 mul 350 line
350 7 div 4 mul 0 move 700 7 div 4 mul 0 line 
fill
 } def

 /Oslash  { CharacterDefs /O  get exec 100 0 move 500 700 line fill  } def
 /minOslashsmallcaps { CharacterDefs /minOsmallcaps get exec 100 0 move 400 500 line fill  } def
 /capOslashmono { CharacterDefs /capOmonosmall get exec 100 0 move 300 700 line fill  } def
 /infinity { 100 500 move 180 270 0 350 turn 270 0 100 200 turn 0 45 200 350 turn
 45 0 300 500 turn 0 270 400 350 turn 270 180 300 200 turn 180 135 200 350 turn 
 135 180 100 500 turn fill } def
 /plusminus { 0 450 move 400 450 line 0 250 move 400 250 line 
 200 300 move 200 600 line fill } def
 /lessequal { 150 500 move 0 350 line 150 200 line 
 250 450 move 400 450 line 250 250 move 400 250 line fill} def
 /greaterequal { 0 500 move 150 350 line 0 200 line 
 250 450 move 400 450 line 250 250 move 400 250 line fill } def
 /yen { 0 700 move 200 400 line 200 0 line 
 400 700 move 200 400 line
 100 300 move 300 300 line
 100 200 move 300 200 line
 fill  } def
 /mu { 0 -200 move 0 500 line 0 200 move 270 0 200 0 turn 0 90 400 200 turn 400 500 line fill } def
 /partialdiff { 400 650 move 150 180 200 700 turn 180 270 0 600 turn
 270 0 200 450 turn 0 270 400 200 turn 270 180 200 0 turn
 180 90 0 200 turn 90 0 200 450 turn
 fill   } def
 /summation { 500 700 move 0 700 line 350 350 line 0 0 line 500 0 line 
 fill } def
 /capSigmamono { 400 700 move 0 700 line 280 350 line 0 0 line 400 0 line 
 fill } def
 /product  { 0 700 move 500 700 line 100 700 move 100 0 line 400 700 move 400 0 line
 fill  } def
 /pi  { 0 0 move 0 500 line 300 500 line 300 100 line 270 0 400 0 turn
 fill } def
 /integral { 400 700 move 180 270 200 500 turn 200 200 line 270 180 0 0 turn fill } def
 /ordfeminine { 200 500 move 180 270 0 400 turn 270 0 200 300 turn 0 90 400 400 turn 90 180 200 500 turn
 400 300 move 400 500 line 90 180 200 700 turn 180 210  0 650 turn  fill  } def
 /ordmasculine { 200 700 move 180 270 0 500 turn 270 0 200 300 turn 0 90 400 500 turn 90 180 200 700 turn fill } def
 /uni03A9 { 100 0 move 200 0 line 180 90 0 350 turn 90 0 300 720 turn 0 270 600 350 turn 270 180 400 0 turn 400 0 line fill } def
 /capOmegamono { 66 0 move 133 0 line 180 90 0 350 turn 90 0 200 720 turn 0 270 400 350 turn 270 180 266 0 turn 333 500 line fill } def
 /ae { 300 350 move
270 180 150 250 turn
180 270 0 125 turn
 270 0 190 0 turn
0 30 300 50 turn
12 450 move
30 0 150 500 turn
% 200 500 line
0 270 300 350 turn 
300 50 line
300 250 move 600 250 line
90 180 450 500 turn
180 270 300 250 turn
270 0 450 0 turn
0 45 600 100 turn
fill } def
 /minAEmono { 200 350 move
270 180 100 250 turn
180 270 0 125 turn
270 0 125 0 turn
0 30 200 50 turn
8 450 move
30 0 100 500 turn
% 200 500 line
0 270 200 350 turn 
200 50 line
200 250 move 400 250 line
90 180 300 500 turn
180 270 200 250 turn
270 0 300 0 turn
0 45 400 100 turn
fill } def

 /oslash  { CharacterDefs /o get exec 100 -100 move 300 600 line fill } def
 /questiondown { 0 0 move 270 0 200 -220 turn 0 90 400 0 turn
90 180 250 150 turn
180 90 200 200 turn  200 400 line
200 500 dot
fill } def
  /exclamdown { 0 -200 move 0 300 line 0 500 dot 
 fill } def
 /exclamationspanishmono { 200 -200 move 200 300 line 200 500 dot 
 fill } def
 /logicalnot { 0 350 move 400 350 line 400 200 line fill } def
 /radical { 0 350 move 100 0 line 200 700 line 400 700 line fill } def
 /florin { 400 600 move 90 180 300 700 turn 180 270 200 600 turn 200 100 line 270 180 100 0 turn
 180 90 0 100 turn 100 350 move 300 350 line fill } def
 /approxequal { 0 450 move 45 0 100 500 turn 0 315 200 450 turn 315 0 300 400 turn 0 45 400 450 turn
 0 250 move 45 0 100 300 turn 0 315 200 250 turn 315 0 300 200 turn 0 45 400 250 turn
fill } def

 /Delta { 0 0 move 200 700 line 400 0 line 0 0 line fill } def
 /guillemotleft { 100 450 move 0 350 line 100 250 line 
 300 450 move 200 350 line 300 250 line fill  } def
 /guillemotright { 0 450 move 100 350 line 0 250 line 
 200 450 move 300 350 line 200 250 line fill } def
 /elipsis { 0 0 dot 150 0 dot 300 0 dot
 fill } def
 /uni00A0 { } def
 /Agrave { CharacterDefs /capAsmall get exec CharacterDefs /capgrave get exec } def
 /minAgravesmallcaps { CharacterDefs /minAsmallcaps get exec CharacterDefs /mingrave get exec } def
 /capAgravemono { CharacterDefs /capAmonosmall get exec CharacterDefs /capgravemono get exec } def
 /Atilde { CharacterDefs /capAsmall get exec CharacterDefs /captilde get exec } def
 /minAtildesmallcaps { CharacterDefs /minAsmallaps get exec CharacterDefs /mintilde get exec } def
 /Atildemono { CharacterDefs /capAmonosmall get exec CharacterDefs /captildemono get exec } def
 /Otilde { CharacterDefs /capOsmall get exec CharacterDefs /captilde get exec } def
 /minOtildesmallcaps { CharacterDefs /minOsmallcaps get exec CharacterDefs /mintilde get exec } def
 /capOtildemono { CharacterDefs /capOmonosmall get exec CharacterDefs /captildemono get exec } def
 /OE { 175 720 move 
180 270 0 350 turn 
270 0 175 -20 turn
0 90 350 350 turn
90 180 175 720 turn
350 700 move 350 0 line
350 700 move 700 700 line
350 350 move 550 350 line
350 0 move 700 0 line
fill } def
 /minOEsmallcaps { 175 720 7 div 5 mul move 
180 270 0 350 7 div 5 mul turn 
270 0 175 -20 7 div 5 mul turn
0 90 350 350 7 div 5 mul turn
90 180 175 720 7 div 5 mul turn
350 700 7 div 5 mul move 350 0 7 div 5 mul line
350 700 7 div 5 mul move 700 700 7 div 5 mul line
350 350 7 div 5 mul move 550 350 7 div 5 mul line
350 0 move 700 0 line
fill } def
 /capOEmono { 175 7 div 4 mul 720 move 
180 270 0 7 div 4 mul 350 turn 
270 0 175 7 div 4 mul -20 turn
0 90 350 7 div 4 mul 350 turn
90 180 175 7 div 4 mul 720 turn
350 7 div 4 mul 700 move 350 7 div 4 mul 0 line
350 7 div 4 mul 700 move 700 7 div 4 mul 700 line
350 7 div 4 mul 350 move 550 7 div 4 mul 350 line
350 7 div 4 mul 0 move 700 7 div 4 mul 0 line
fill } def
 /oe {  150 500 move
180 270 0 250 turn
270 0 150 0 turn
0 90 300 250 turn
90 180 150 500 turn
300 250 move 600 250 line
90 180 450 500 turn
180 270 300 250 turn
270 0 450 0 turn
0 45 600 100 turn
fill } def
 /minOEmono {  100 500 move
180 270 0 250 turn
270 0 100 0 turn
0 90 200 250 turn
90 180 100 500 turn
200 250 move 400 250 line
90 180 300 500 turn
180 270 200 250 turn
270 0 300 0 turn
0 45 400 100 turn
fill } def
 /endash { 0 350 move 400 350 line fill } def
 /ndashmono { 0 350 move 300 350 line fill } def
 /emdash { 0 350 move 600 350 line fill } def
 /mdashmono { 0 350 move 400 350 line fill } def
 /quotedblleft { 100 700 move 100 600 line 270 240 0 450 turn
 300 700 move 300 600 line 270 240 200 450 turn fill } def
 /quotedblright {  0 450 move 0 550 line 90 60 100 700 turn
 200 450 move 200 550 line 90 60 300 700 turn fill } def
 /quoteleft {  100 700 move 100 600 line 270 240 0 450 turn
 fill } def
 /singleopentopquotemono {  200 700 move 200 600 line 270 240 100 450 turn
 fill } def
 /quoteright { 0 450 move 0 550 line 90 60 100 700 turn fill } def
 /singleclosetopquotemono { 100 450 move 100 550 line 90 60 200 700 turn fill } def
 /divide { 0 350 move 400 350 line 200 500 dot 200 200 dot fill } def
 /lozenge { 200 500 move 0 250 line 200 0 line 400 250 line 200 500 line fill } def
 /ydieresis { CharacterDefs /y get exec CharacterDefs /minumlaut get exec } def
 /Ydieresis { CharacterDefs /capYsmall get exec CharacterDefs /capumlaut get exec } def
 /minYumlautsmallcaps { CharacterDefs /minYsmallcaps get exec CharacterDefs /capumlaut get exec } def
 /capYumlautmono { CharacterDefs /capYmonosmall get exec CharacterDefs /capumlaut get exec } def
 /fraction { CharacterDefs /e  get exec CharacterDefs /mincirc get exec } def
 /euro { 500 600 move 
120 180 275 720 turn 180 270 100 350 turn
270 0 275 -20 turn 0 30 500 100 turn 
0 450 move 300 450 line
0 250 move 300 250 line
fill  } def
 /euromono { 400 600 move 
120 180 275 720 turn 180 270 80 350 turn
270 0 220 -20 turn 0 30 400 100 turn 
0 450 move 400 450 line
0 250 move 400 250 line
fill  } def
 /quilsinglleft { 100 450 move 0 350 line 100 250 line fill } def
 /singleopenquotemono { 200 450 move 100 350 line 200 250 line fill } def
 /quilsinglright  { 0 450 move 100 350 line 0 250 line fill } def
 /quilsinglright  { 100 450 move 200 350 line 100 250 line fill } def
 /uniFB01 { CharacterDefs /f get exec gsave 300 0 translate CharacterDefs /dotlessi get exec grestore } def
 /uniFB02 { CharacterDefs /f get exec gsave 300 0 translate CharacterDefs /l get exec grestore } def
 /daggerdbl { 200 700 move 200 0 line
  0 500 move 400 500 line
  0 200 move 400 200 line
   fill  } def
 /periodcentered { 200 350 dot fill } def
 /quotesinglbase { 100 100 move 100 0 line 270 240 0 -150 turn fill } def
 /singleopenbottomquotemono { 200 100 move 200 0 line 270 240 100 -150 turn fill } def
 /quotedblbase { 100 100 move 100 0 line 270 240 0 -150 turn 
 300 100 move 300 0 line 270 240 200 -150 turn fill } def
 
 /perthousand { 600 700 move 0 0 line
250 575 move 90 180 125 700 turn 180 270 0 575 turn
270 0 125 425 turn 0 90 250 575 turn
350 125 move 90 0 475 250 turn 0 270 600 125 turn
270 180 475 0 turn 180 90 350 125 turn
700 125 move 90 0 825 250 turn 0 270 950 125 turn
270 180 825 0 turn 180 90 700 125 turn
fill } def
 /permillemono { 400 700 move 0 0 line
165 575 move 90 180 85 700 turn 180 270 0 575 turn
270 0 85 425 turn 0 90 165 575 turn
220 125 move 90 0 280 250 turn 0 270 320 125 turn
270 180 280 0 turn 180 90 220 125 turn
300 125 move 90 0 350 250 turn 0 270 400 125 turn
270 180 350 0 turn 180 90 300 125 turn
fill } def
 /Acircumflex  { CharacterDefs /capAsmall get exec CharacterDefs /capcirc get exec } def
 /minAcircsmallcaps { CharacterDefs /minAsmallcaps get exec CharacterDefs /mincirc get exec } def
 /capAcircmono { CharacterDefs /capAmonosmall get exec CharacterDefs /capcircmono get exec } def
 /Ecircumflex { CharacterDefs /capEsmall get exec CharacterDefs /capcirc get exec } def
 /minEcircsmallcaps { CharacterDefs /minEsmallcaps get exec CharacterDefs /mincirc get exec } def
 /capEcircmono { CharacterDefs /capEmonosmall get exec CharacterDefs /capcircmono get exec } def
 /Aacute { CharacterDefs /capAsmall get exec CharacterDefs /capacute get exec } def
 /aacutesmallcaps { CharacterDefs /minAsmallcaps get exec CharacterDefs /minacute get exec } def
 /capAacutemono { CharacterDefs /capEmonosmall get exec CharacterDefs /capacutemono get exec } def
 /Edieresis { CharacterDefs /capEsmall get exec CharacterDefs /capumlaut get exec } def
 /minEumlautsmallcaps { CharacterDefs /minEsmallcaps get exec CharacterDefs /minumlaut get exec } def
 /capEumlautmono { CharacterDefs /capEmonosmall get exec CharacterDefs /capumlautmono get exec } def
 /Egrave  { CharacterDefs /capEsmall get exec CharacterDefs /capgrave get exec } def
 /minEgravesmallcaps { CharacterDefs /minEsmallcaps get exec CharacterDefs /mingrave get exec } def
 /capEgravemono { CharacterDefs /capEmonosmall get exec CharacterDefs /capgravemono get exec } def
 /Iacute { CharacterDefs /capIsmall get exec CharacterDefs /capacute get exec } def
 /iacutesmallcaps { CharacterDefs /minIsmallcaps get exec CharacterDefs /minacute get exec } def
 /Iacutemono { CharacterDefs /capImonosmall get exec CharacterDefs /capacutemono get exec } def
 /Icircumflex { CharacterDefs /capIsmall get exec CharacterDefs /capcirc get exec } def
 /minIcircsmallcaps { CharacterDefs /minIsmallcaps get exec CharacterDefs /mincirc get exec } def
 /capIcircmono { CharacterDefs /capImonosmall get exec CharacterDefs /capcircmono get exec } def
 /Idieresis { CharacterDefs /capIsmall get exec CharacterDefs /capumlaut get exec } def
 /minIumlautsmallcaps { CharacterDefs /minIsmallcaps get exec CharacterDefs /minumlaut get exec } def
 /capIumlautmono { CharacterDefs /capImonosmall get exec CharacterDefs /capumlautmono get exec } def
 /Igrave  { CharacterDefs /capIsmall get exec CharacterDefs /capgrave get exec } def
 /minIgravesmallcaps { CharacterDefs /minIsmallcaps get exec CharacterDefs /mingrave get exec } def
 /capIgravemono { CharacterDefs /capImonosmall get exec CharacterDefs /capgravemono get exec } def
 /Oacute { CharacterDefs /capOsmall get exec CharacterDefs /capacute get exec } def
 /minOacutesmallcaps { CharacterDefs /minOsmallcaps get exec CharacterDefs /minacute get exec } def
 /capOacutemono { CharacterDefs /capOmonosmall get exec CharacterDefs /capacutemono get exec } def
 /Ocircumflex { CharacterDefs /capOsmall get exec CharacterDefs /capcirc get exec } def
 /minOcircsmallcaps { CharacterDefs /minOsmallcaps get exec CharacterDefs /mincirc get exec } def
 /capOcircmono { CharacterDefs /capOmonosmall get exec CharacterDefs /capcircmono get exec } def
 /uniF8FF {  } def
 /Ograve  { CharacterDefs /capOsmall get exec CharacterDefs /capgrave get exec } def
 /minOgravesmallcaps { CharacterDefs /minOsmallcaps get exec CharacterDefs /mingrave get exec } def
 /capOgravemono { CharacterDefs /capOmonosmall get exec CharacterDefs /capgravemono get exec } def
 /Uacute { CharacterDefs /capUsmall get exec CharacterDefs /capacute get exec } def
 /uacutesmallcaps { CharacterDefs /minUsmallcaps get exec CharacterDefs /minacute get exec } def
 /Uacutemono { CharacterDefs /capUmonosmall get exec CharacterDefs /capacutemono get exec } def
 /Ucircumflex  { CharacterDefs /capUsmall get exec CharacterDefs /capcirc get exec } def
 /minUcircsmallcaps { CharacterDefs /minUsmallcaps get exec CharacterDefs /mincirc get exec } def
 /capUcircmono { CharacterDefs /capUmonosmall get exec CharacterDefs /capcircmono get exec } def
 /Ugrave { CharacterDefs /capUsmall get exec CharacterDefs /capgrave get exec } def
 /minUgravesmallcaps { CharacterDefs /minUsmallcaps get exec CharacterDefs /mingrave get exec } def
 /capUgravemono { CharacterDefs /capUmonosmall get exec CharacterDefs /capgravemono get exec } def
 /dotlessi { 
 currentslanted { 0 50 endswash 0 50 move } { 0 0 move } ifelse
 0 500 line fill } def
 /circumlfex { CharacterDefs /asciicircum  get exec  } def
 /tilde { CharacterDefs /asciitilde get exec } def
 /macron { 100 700 move 300 700 line fill } def
 /breve { 100 700 move 270 0 200 650 turn 0 90 300 700 turn fill } def
 /dotaccent { 200 700 dot fill } def
 /ring { 200 800 move 180 270 100 700 turn 270 0 200 600 turn 0 90 300 700 turn 90 180 200 800 turn fill } def
 /cedilla { CharacterDefs /mincedille get } def
 /hungarumlaut { 50 650 move 150 750 line 250 650 move 350 750 line fill  } def
 /ogonek { /characterwidth 500 def 200 0 move 200 -50 line 400 270 100 -120 turn 130 180 200 -190 turn fill } def
 /caron { 100 700 move 200 650 line 300 700 line fill } def

end


/move { 10 dict begin 
/y1 exch def /x1 exch def
x1 y1 moveto
end } def

/transpose { 10 dict begin /y exch def /x exch def
/x characterweight 2 div x characterwidth characterweight sub mul characterwidth div add def
/y characterweight 2 div y 700 characterweight sub mul 700 div add def 
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
/c characterweight 2 div def
/a y2 y1 sub x2 x1 sub atan def
c { x1 y1 moveto x1 y1 c 0 360 arc } if
x1 a 90 sub cos c mul add y1 a 90 sub sin c mul add moveto 
x2 a 90 sub cos c mul add y2 a 90 sub sin c mul add lineto 
c {
x2 a 90 sub cos c mul sub y2 a 90 sub sin c mul sub lineto 
x1 a 90 sub cos c mul sub y1 a 90 sub sin c mul sub lineto  
x2 y2 moveto x2 y2 c 0 360 arc } if
x20 y20 moveto
end } def

/dot { 10 dict begin /y exch def /x exch def
/c characterweight def
c 0 eq { /c 40 def } if
 x y transpose /y exch def /x exch def
 x c 0.625 mul add y move x y c 0.625 mul 0 360 arc closepath
end } def

/curve { 10 dict begin /y4 exch def /x4 exch def /y3 exch def /x3 exch def /y2 exch def /x2 exch def
currentpoint /y1 exch def /x1 exch def
/c characterweight 2 div def

%slanted
/x40 x4 def
/y40 y4 def

 x2 y2 transpose /y2 exch def /x2 exch def
 x1 y1 transpose /y1 exch def /x1 exch def
 x3 y3 transpose /y3 exch def /x3 exch def
 x4 y4 transpose /y4 exch def /x4 exch def

/a1 y2 y1 sub x2 x1 sub atan def
/a4 y4 y3 sub x4 x3 sub atan def
c { x1 y1 moveto x1 y1 c 0 360 arc } if
/x1r x1 a1 90 sub cos c mul add def
/y1r y1 a1 90 sub sin c mul add def
/x4r x4 a4 90 sub cos c mul add def
/y4r y4 a4 90 sub sin c mul add def
/x1l x1 a1 90 sub cos c mul sub def
/y1l y1 a1 90 sub sin c mul sub def
/x4l x4 a4 90 sub cos c mul sub def
/y4l y4 a4 90 sub sin c mul sub def
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
x4 y4 moveto x4 y4 c 0 360 arc } if
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

/endswash { 10 dict begin /y exch def /x exch def
x y move 
270 0 x 75 add y 50 sub turn
0 90 x 150 add y turn 
end } def

/startswash { 10 dict begin /y exch def /x exch def
x y move 
90 180 x 75 sub y 50 add turn
180 270 x 150 sub y turn 
end } def


/BuildChar { 5 dict begin
 /char exch def /fontdict exch def 
 /charname fontdict /Encoding get char get def 
   
 fontdict begin 
   % gsave
     % charname print fontdict /FontName get print
	 /characterwidth Metrics charname get def  
	 /characterweight ${kugiweight} def
	 /currentslanted ${kugislant} def
     Metrics charname get 0 BBox charname get aload pop 
     setcachedevice 
     characterweight 0 eq { /fill { stroke } def } if
     CharacterDefs charname get exec 
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


  
