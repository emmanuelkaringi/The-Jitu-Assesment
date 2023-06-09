-- Write a stored procedure that accepts a customer ID and returns the total number of orders placed by that customer.

CREATE PROCEDURE TotalOrders12
AS
SELECT customer_id
SUM(order_id) AS total_orders
FROM sales.orders
GO

EXEC TotalOrders1;
GO

