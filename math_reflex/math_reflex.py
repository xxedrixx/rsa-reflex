import reflex as rx
import math

class NumberInputState(rx.State):
    p: int
    q: int
    r: int
    is_prime_q: bool = False  
    is_prime_p: bool = False  
    is_prime_r: bool = False
    n: int

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
        self.r = int(value) if value.strip() != "" else 0  # Convert to integer if value is not empty
        if self.r != 0:
            self.is_prime_r = self.prime(self.r)
        else:
            self.is_prime_r = False
        
    def set_n(self):
        self.n = self.p * self.q 
 

@rx.page(title="RSA")
def index():
    return rx.vstack(
        rx.text("Enter p"),
        rx.number_input(
            on_change=NumberInputState.set_p,
            min_=0
        ),
        
        rx.cond(
            NumberInputState.is_prime_p,
            rx.vstack(
                rx.text("p=", NumberInputState.p),
                rx.text("Enter q"),
                rx.number_input(
                    on_change=NumberInputState.set_q,
                    min_=0),
                
                rx.cond(
                    NumberInputState.is_prime_q,
                    rx.vstack(
                        rx.text("q=", NumberInputState.q),
                        rx.text("Enter r"),
                        rx.number_input(
                            on_change=NumberInputState.set_r,
                            min_=0),
                        
                        rx.cond(
                            NumberInputState.is_prime_r,
                            rx.vstack(
                                rx.text("r=", NumberInputState.r),
                                rx.text_area(placeholder="Enter message"),
                                ),
                            rx.text(NumberInputState.r, " is NOT prime r", color="red")
                        )
                    ),
                        
                    rx.text(NumberInputState.q, " is NOT prime q", color="red"),
                )
            ),

            rx.text(NumberInputState.p, " is NOT prime p", color="red"),
        )
    )

@rx.page(route="/about")
def about():
    return rx.text("This is a simple project to try out reflex")


app = rx.App()
app.compile()