import reflex as rx

def navbar():
    return rx.flex(
        rx.link(
            rx.image(src="/favicon.ico", width="25px", height="25px"),
            href="/"
        ),
        rx.box(
            rx.hstack(
                rx.link('Home', href="/", _hover={"text_decoration": "none"}),
                rx.link('About', href="/about", _hover={"text_decoration": "none"}),
                rx.link('Prime Numbers', href="/prime-numbers", _hover={"text_decoration": "none"}),
                spacing="3em"
            )
        ),
        justify_content="space-between",
        align_items="center",
        padding_x="5em",
        padding_y= "10px",
        width="100%",
        box_shadow="0px 1px 2px 0px rgba(0, 0, 0, 0.2)"
    )