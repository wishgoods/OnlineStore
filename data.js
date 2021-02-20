module.exports = () => {


    return {
        products:
            [
                { id: 1, name: "Shirt", category: "Category1", description: "TShirt(Category1)", price: "100" },
                { id: 2, name: "Pants", category: "Category1", description: "Shorts(Category1)", price: "100" },
                { id: 3, name: "Coats", category: "Category1", description: "Leather(Category1)", price: "50" },
                { id: 4, name: "perfume", category: "Category1", description: "Wind-Block(Category1)", price: "250" },
                { id: 5, name: "perfume", category: "Category2", description: "Gucci(Category2)", price: "150" },
                { id: 6, name: "perfume", category: "Category2", description: "channel(Category2)", price: "200" },
                { id: 7, name: "Hat", category: "Category1", description: "travel(Category1)", price: "300" },
                { id: 8, name: "Hat", category: "Category1", description: "work(Category1)", price: "100" },
                { id: 9, name: "Lipstick", category: "Category2", description: "Red(Category2)", price: "100" },
                { id: 10, name: "Wallet", category: "Category1", description: "Men(Category2)", price: "100" }
            ],
        orders: [],
        login:[{user: "admin", pass:"secret"}],
    }
}