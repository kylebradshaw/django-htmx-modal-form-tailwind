# Django+HTMX modal form

This project is forked from Benoit Blanchon's demonstration of how to show a Django Form in a modal dialog box using HTMX.

Here are Benoit's blog posts and youtube videos about the technique:

* [Modal forms with Django+HTMX](https://blog.benoitblanchon.fr/django-htmx-modal-form/) (blog post)
* [Modal forms with Django+HTMX](https://youtu.be/3dyQigrEj8A) (YouTube video)
* [Toasts with Django+HTMX](https://blog.benoitblanchon.fr/django-htmx-toasts/) (blog post)
* [Toasts with Django+HTMX](https://youtu.be/pAtrj8A-Kl4) (YouTube video)

This fork moves to django 4, uses poetry to manage the project, and uses Tailwind CSS instead of Bootstrap.

No incompatibilites were intentionally introduced versus django 3.2, so the original pipenv files should probably still install the virtual environment and run the server just fine.

To set things up using `poetry` run:

```
poetry install
poetry run python manage.py migrate
poetry run python manage.py runserver
```
