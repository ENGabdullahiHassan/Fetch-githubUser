console.log("Before time-consuming task (Synchronous)");

const start = new Date().getTime();
while (new Date().getTime() < start + 5000); // 5 seconds delay

console.log("After time-consuming task (Synchronous)");



console.log("Before time-consuming task (Asynchronous)");

setTimeout(function () {
	console.log("Time-consuming task complete (Asynchronous)");
}, 5000); // 5 seconds delay

console.log("After time-consuming task (Asynchronous)");


setTimeout(() => {
	console.log("This will run after 2 seconds");
}, 2000);




let promise = new Promise((resolve, reject) => {
	let a = 1 + 1;
	if (a == 2) {
		resolve("Success");
	} else {
		reject("Failed");
	}
});

promise
	.then((message) => {
		console.log("This is in the then " + message);
	})
	.catch((message) => {
		console.log("This is the catch " + message);
	});


    /**
 * Fetches data from the specified URL using the Fetch API.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise} A Promise that resolves with the parsed JSON data if the response is successful, or rejects with an error.
 */
function fetchData(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => {
				if (response.ok) {
					resolve(response.json());
				} else {
					reject(new Error("Failed to fetch data"));
				}
			})
			.catch((error) => reject(error));
	});
}

// Usage
fetchData("https://api.github.com/users/openai")
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error("Error:", error);
	});



    async function fetchUser(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.ok) {
                const user = await response.json();
                console.log(user);
            } else {
                throw new Error("Failed to fetch user");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    fetchUser("mchamoudadev");



    function checkInventory(order) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (order.quantity <= 100) {
                    resolve(order);
                } else {
                    reject("Not enough inventory");
                }
            }, 1000);
        });
    }
    
    function processPayment(order) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (order.paymentMethod === "Credit Card") {
                    resolve(order);
                } else {
                    reject("Unsupported payment method");
                }
            }, 1000);
        });
    }
    
    function shipOrder(order) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Order shipped: ${order.item}`);
            }, 1000);
        });
    }
    
    let order = {
        item: "Drone",
        quantity: 1,
        paymentMethod: "Credit Card",
    };
    
    async function processOrder(order) {
        try {
            await checkInventory(order);
            await processPayment(order);
            const shippingStatus = await shipOrder(order);
            console.log(shippingStatus);
        } catch (error) {
            console.error(error);
        }
    }
    
    processOrder(order);