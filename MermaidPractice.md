<!-- Mermaid Syntax practice: https://mermaid.js.org/syntax -->
<!-- This is a markdown comment, which is the same as a HTML comment -->

<!--
This is a multi line
comment
-->

<!-- Flowchart -->
``` mermaid
flowchart TD;
%% This is a comment
%% TD indicates Top-Down direction of the flowchart
A(Start) --> B[Test];
B ==> C{Decision}
A -.-> D[Test]
D --> |Yes| F(End)
D --x G
G <-.-> H{Testing2}
H ==o I
```

```mermaid
flowchart LR
%%LR indicates "Left Right" direction
A --> B
```


<!-- User Journey -->

```mermaid
journey
title My Working Day
%% This is the title
section Go to Work
    Make tea: 5: Me
    Go upstairs: 3: Me, Cat
    Do work: 1: Cat
section Go home
    Go downstairs: 7: Me
    Sit down: 0: Me, Cat, Dog
```

<!-- Pie Chart -->

```mermaid
pie showData
%% "ShowData" to render actual data values after the legend text
title Pets that are adopted already
    "Dogs" : 200
    "Cats" : 300
    "Rats" : 200
```

<!-- Mindmap -->

```mermaid
mindmap
    root((Test))
        Subject 1
            Sub-1
            Sub-2
            ::icon(fa fa-book)
            Sub-3
                Sub-Sub1
                Sub-Sub2
        Subject 2
            Sub-1
            Sub-2
                Sub-Sub1
                id(I am round)
                id[I am square]
                id((I am a circle))
                id))I am a bang((
                    id)I am a cloud(
                        id{{I am a hexagon}}
        id)Example of markdown(
            id["`Works wiht **Markdown* too, *Do you know* that?`"]
```

<!-- Timeline -->
```mermaid
---
config:
    look: handDrawn
    theme: dark
---
%% to get the hand drawn look use configuration.
timeline
    title History of Social Media Platforms
    section First Section
        2001 : Linkedin <br> is the best
        %% use <br> for line breaks
        2002 : Facebook
                : Google
    section Second Section
    2004 : Instagram
    2006 : Twitter
         : Vimeo : Olo
```

<!-- Quadrant Chart -->
```mermaid
quadrantChart
title Companies
x-axis Low Scale --> High Scale
y-axis Low Capital Requirements --> High Capital Requirements
quadrant-1 Unicorns
quadrant-2 Cash Cow
quadrant-3 Zombie
quadrant-4 Goldilocks
Company A: [0.3, 0.6] radius: 10, color: #fc0900
Company B: [0.4, 0.8] radius: 22, color: #ff9c00
```

<!-- Entity Relationship Diagram -->
```mermaid
---
title: Test ER Diagram
---
erDiagram
    Customer ||--o{ Order : places
    Order ||--|{ "Line Item" : contains
    %% use double quotes for names with spaces
    Customer }|..|{ Delivery-Address : uses
%% Syntax:     <first-entity> [<relationship> <second-entity> : <relationship-label>]

```
<!-- 
Relationship Syntax Legend
|o	o|	Zero or one
||	||	Exactly one
}o	o{	Zero or more (no upper limit)
}|	|{	One or more (no upper limit)
--	identifying
..	non-identifying
to	identifying
optionally to	non-identifying

-->

<!-- Gantt -->