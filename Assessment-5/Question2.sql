-- Create a view that returns the total quantity and sales amount for each product.

CREATE VIEW Total_Quantity_Sales AS
Select product_id, SUM(quantity) AS total_quantity, SUM(quantity * list_price) AS sales_amount
FROM sales.order_items

SELECT * FROM Total_Quantity_Sales;
