import pathlib

ESKI_KUR = "cd40f569bb2db8258943d4ae97d43b09703b05c9785c01a6b32f8f48dedc1f4f"
YENI_KUR = "13adce486fa4a2be6228c01f26e3dbad27ac55db8089d42736eeea7a7ef01fe6"
ESKI_POR = "87c4d62755448ba505f086cbc9dcb58e937462eb3b9c5f3a50851a95ed48b284"
YENI_POR = "b2355bc2353fe6c83a08330eb86ea62064637cd55440ef0c1b92113828661e2a"

TR = [
    ("v3.1.81", "v3.1.82"),
    ("3.1.81", "3.1.82"),
    ("124,9 MB", "129,5 MB"),
    ("180,2 MB", "180,5 MB"),
    ("7 Kasım 2026", "8 Kasım 2026"),
    (ESKI_KUR, YENI_KUR),
    (ESKI_POR, YENI_POR),
]
EN = [
    ("v3.1.81", "v3.1.82"),
    ("3.1.81", "3.1.82"),
    ("124.9 MB", "129.5 MB"),
    ("180.2 MB", "180.5 MB"),
    ("7 November 2026", "8 November 2026"),
    (ESKI_KUR, YENI_KUR),
    (ESKI_POR, YENI_POR),
]

for p in sorted(pathlib.Path("docs").rglob("*.html")):
    b = p.read_bytes()
    metin = b.decode("utf-8")
    onceki = metin
    yol = str(p).replace("\\", "/")
    for a, c in (EN if ("-en" in p.name or "indir-en" in yol) else TR):
        metin = metin.replace(a, c)
    if metin != onceki:
        p.write_bytes(metin.encode("utf-8"))
        print("guncellendi", p)
