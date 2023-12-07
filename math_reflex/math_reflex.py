import reflex as rx

def index():
    return rx.text("This is home page")


app = rx.App()
app.add_page(index)
app.compile()