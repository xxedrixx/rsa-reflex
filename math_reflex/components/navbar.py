import reflex as rx

def navbar():
    return rx.flex(
        rx.link(
            rx.image(src="/favicon.ico"),
            href="/"
        ),
        rx.box(
            rx.hstack(
                rx.link('About', href="/about"),
                rx.link('Prime Numbers', href="#"),
                rx.link('Encryption', href="#"),
                spacing="3em"
            )
        ),
        justify_content="space-between",
        align_items="center",
        padding_x="5em",
        padding_y= "1em",
        width="100%",
    )