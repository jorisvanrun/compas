kompas_geheugen = 0

def on_button_pressed_a():
    global kompas_geheugen
    music.play_melody("C F E F E B G C5 ", 200)
    basic.show_number(input.compass_heading())
    kompas_geheugen = input.compass_heading()
    music.play_melody("C B A G A A G F ", 200)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_icon(IconNames.HAPPY)
    soundExpression.happy.play()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    music.play_melody("C D E F G A B C5 ", 120)
    basic.show_number(kompas_geheugen)
    music.play_melody("C5 B A G F E D C ", 120)
input.on_button_pressed(Button.B, on_button_pressed_b)
