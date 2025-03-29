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
```mermaid
gantt
    title A Gantt Test Diagram
    dateFormat DD-MM-YYYY
    section First Section
        A task : a1, 01-01-2025, 12d
        B task : done, after a1, 20d
    section Second Section
        C task : crit, 01-01-2025, 15d
        D task : active, 24d
        E task : milestone, 15-01-2025, 2d
```
<!-- 
Valid Gantt Tags:
    active, done, crit, milestone
-->

<!--
Gantt Syntax
gantt
    dateFormat  YYYY-MM-DD
    title       Adding GANTT diagram functionality to mermaid
    excludes    weekends
    %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :until isadded
    Functionality added                 :milestone, isadded, 2014-01-25, 0d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      :20h
    Add another diagram to demo page    :48h
-->