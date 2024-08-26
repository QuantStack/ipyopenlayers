.. _installation:

Installation
============

Installing using pip
----------------------------------

The simplest way to install ipyopenlayers is via pip::

    pip install ipyopenlayers

Installing the Front-end Extension
----------------------------------

If you installed via pip, and notebook version < 5.3, you will also have to
install / configure the front-end extension as well. If you are using classic
notebook (as opposed to Jupyterlab), run::

    jupyter nbextension install [--sys-prefix / --user / --system] --py ipyopenlayers
    jupyter nbextension enable [--sys-prefix / --user / --system] --py ipyopenlayers

with the `appropriate flag`_.

Installing for JupyterLab
-------------------------

If you are using JupyterLab, install the extension with::

    jupyter labextension install ipyopenlayers


.. links

.. _`appropriate flag`: https://jupyter-notebook.readthedocs.io/en/stable/extending/frontend_extensions.html#installing-and-enabling-extensions
