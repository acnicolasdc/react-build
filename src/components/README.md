# Components Rules Languages

### Deductive Component Language
The general idea of deductive component language is that you work way down from the most general to the most specific attributes to name your component.

Deductive component language can be boiled down to asking yourself only to questions while making a component:

* ¿ What does component generally concern ?

For example, if it is a component that is generally used for your "Product". then the answer to this question is Product. This answer becomes the parent folder name where this component lives & the first part of the component’s final name.

##### Note:

This parent-level term can be plural or singular but you should pick one or the other so that all folders have the same structure  ( Product or Products ).

So far our component has this structure
`Product/ Product____/ index.jsx`

* ¿ What does this component do ?

This is the hyper-specific functionality of the component. For example, if it is a component that displays all the information for your products (on e-commerce display pages) then the answer to this question is something like “well, it’s the Card information”. This answer becomes the second part of the component’s name. In the end, this component’s name & structure looks something:

`Product/ ProductCardInformation/ index.jsx`

At the end of the system we now have a component name that tells:

* Where the component lives.
* What the component generally concerns.
* What the component specifically does.

