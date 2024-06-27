#!/bin/bash

cd backend || {echo "Directory not found"; exit 1 }

source venv/bin/activate

python run.py