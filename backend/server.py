# This is a simple multithreading script that when ran, it should
# run all the servers under "backend" folder under different ports

# It was created to modularise our different areas of the project
# so that every django project has its unique and decoupled functionalities
import subprocess
import _thread
import sys

# TODO: Should delete testserver as it is only used to demonstrate
# TODO: the functionality of this script
# Locations
AUTH = 'auth/manage.py'
TEST = 'testserver/manage.py'

# PORTS
AUTH_PORT = 8081
TEST_PORT = 8082

# ADDRESSES
LOCALHOST = 'localhost'


def run_a_server(location, hostname, port):
    subprocess.call([sys.executable, location, 'runserver', f'{hostname}:{port}'])


try:
    _thread.start_new_thread(run_a_server, (AUTH, LOCALHOST, AUTH_PORT))
    _thread.start_new_thread(run_a_server, (TEST, LOCALHOST, TEST_PORT))
except:
    print("Error: unable to start thread")

while 1:
    pass
