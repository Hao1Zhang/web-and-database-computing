SELECT customer.first_name,customer.last_name,rental.rental_date
from customer
INNER JOIN rental ON customer.customer_id = rental.customer_id
WHERE rental.return_date IS NULL
ORDER BY rental.rental_date
LIMIT 1;