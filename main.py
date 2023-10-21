Miloszek Gmusic.play_melody("C5 F - B - D - D ", 120)
basic.show_string("Hej Fajnie się bawisz")
music.play(music.string_playable("C D G D E D E D ", 120),
    music.PlaybackMode.UNTIL_DONE)

def on_forever():
    basic.show_icon(IconNames.ASLEEP)
basic.forever(on_forever)
