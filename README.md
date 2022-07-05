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
poetry run python manage.py tailwind install
poetry run python manage.py tailwind build
poetry run python manage.py runserver
```

### Credits

The Tailwind CSS branch includes markup adapted from TailwindUI, which is used according to the terms of the TailwindUI license. It also includes an SVG spinner adapted from [Flowbite](https://flowbite.com/docs/components/spinner/), which is Copyright (c) Themesberg (Crafty Dwarf Inc.) and is [used under the terms of the MIT license](https://flowbite.com/docs/getting-started/license/).

Both the authors of TailwindUI and the authors of Flowbite have really helped me improve my understanding of Tailwind, and I'm grateful that they publish their work under such generous terms.