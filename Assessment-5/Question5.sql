-- Create a view that shows the product details along with the total sales quantity and revenue for each product.

CREATE VIEW production.Product_Sales_Stats
 AS
SELECT
    p.product_id,
    product_name,
    quantity,
    quantity * i.list_price AS sales
FROM sales.orders AS o
    INNER JOIN sales.order_items AS i 
        ON o.order_id = i.order_id
            INNER JOIN production.products as p
                ON i.product_id = p.product_id;
GO



SELECT * FROM production.Product_Sales_Stats
GO