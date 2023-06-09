-- Write a query to find the top 5 customers who have placed the most orders.

SELECT TOP 5 c.customer_id, c.first_name, c.last_name, COUNT(o.order_id) AS total_orders
FROM sales.customers AS c
JOIN sales.orders AS o 
ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY total_orders DESC