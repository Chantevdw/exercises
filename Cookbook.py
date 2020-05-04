# -*- coding: utf-8 -*-
"""
Created on Sat May  2 16:52:54 2020

@author: etnah
"""


cookbook = {
    "pasta": ["tomato", "basil", "garlic", "salt", "pasta", "olive oil"],
    "apple pie": ["apple", "sugar", "salt", "cinnamon", "flour", "egg", "butter"],
    "ratatouille": ["aubergine", "carrot", "onion", "tomato", "garlic", "olive oil", "pepper", "salt"],
    "chocolate cake": ["chocolate", "sugar", "salt", "flour", "coffee", "butter"],
    "omelette": ["egg", "milk", "bacon", "tomato", "salt", "pepper"],
}
ingredient = input("List your ingredient: ")
for recipe in cookbook:
    if ingredient in cookbook[recipe]:
        print("You can make {}".format(recipe))