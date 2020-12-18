const mongoose = require('mongoose');
const budgetModel = require('./models/Budget');
describe('User Model Test', () => {

   
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('save budget successfully', async () => {
        const budgetData={name: "trip",budget: 800,date: '2020-12-16T18:17:00.000+00:00', capacity:0 };
        const budget=new budgetModel(budgetData);
        const savedBudget = await budget.save();
        expect(savedBudget._id).toBeDefined();
        expect(savedBudget.name).toBe(budgetData.name);
        
    });

   
})