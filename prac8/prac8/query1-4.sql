SELECT address.address FROM address
inner join store on store.address_id = address.address_id
inner join inventory on inventory.store_id = store.store_id
inner join film on film.film_id = inventory.film_id
WHERE film.title = 'TWISTED PIRATES'
LIMIT 1;

