-- Write a query to retrieve the list of orders along with the customer name and staff name for each order.

SELECT 
    o.order_id,
    c.first_name,
    c.last_name,
    s.first_name AS staff_name,
    o.order_status,
    o.order_date
FROM sales.orders o
    INNER JOIN sales.customers c
        ON c.customer_id = o.customer_id
    INNER JOIN sales.staffs s
        ON s.staff_id = o.staff_id