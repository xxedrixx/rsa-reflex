import reflex as rx
import math

class NumberInputState(rx.State):
    p: int
    q: int
    r: int
    is_prime_q: bool = False  
    is_prime_p: bool = False  

    def prime(self, num):
        if num < 2:  
            return False  
        for i in range(2, int(math.sqrt(num)) + 1):  
            if num % i == 0:  
                return False  
        return True 

    def set_p(self, value):     # Use built-in setter to update state
        self.p = int(value) if value.strip() != "" else 0  # Convert to integer if value is not empty
        if self.p != 0:
            self.is_prime_p = self.prime(self.p)
        else:
            self.is_prime_p = False

    def set_q(self, value):     # Use built-in setter to update state
        self.q = int(value) if value.strip() != "" else 0  # Convert to integer if value is not empty
        if self.q != 0:
            self.is_prime_q = self.prime(self.q)
        else:
            self.is_prime_q = False

    def set_r(self, value):     # Use built-in setter to update state
        self.q = int(value) if value.strip() != "" else 0  # Convert to integer if value is not empty
        if self.q != 0:
            self.is_prime = self.prime(self.q)
        else:
            self.is_prime = False
        
 
@rx.page(title="RSA")
def index():
    return rx.container(
        rx.number_input(
            on_change=NumberInputState.set_p,
            min_=0
        ),

        rx.cond(
            NumberInputState.is_prime_p,
            rx.container(
                rx.number_input(
                    on_change=NumberInputState.set_q,
                    min_=0),
                
                rx.cond(
                    NumberInputState.is_prime_q,
                    rx.number_input(
                        on_change=NumberInputState.set_r,
                        min_=0),
                    rx.text(NumberInputState.q, " is NOT prime", color="red"),
                )
            ),

            rx.text(NumberInputState.p, " is NOT prime", color="red"),
        )
    )

@rx.page(route="/about")
def about():
    return rx.text("This is a simple project to try out reflex")


app = rx.App()
app.compile()