Live Demo https://quicksell-151d7.web.app
## note
Besides what I have implemented, User view state can be saved in local storage
And localstorage can be used to get last view state of the user even after reload
but I did this on top of routing without using localstorage 
so it's not just storing last state but 
also all selected previous view state of the user and also user can simply share the 
current view state with other just by using URL 
## features
<ul>
    <li>Responsive Design: Work in mobile phones as well</li>
    <li>Fetches Data from API </li>
    <li>hover over display button if mouse or click if on phone </li>
    <li>Displays data based on grouping (Priority, User, Status) </li>
    <li>Orders data within Group (Order by Title, Priority) </li>
    <li>Use path (route) to save view state of the user instead of local storage</li>
    <li>It saves not just last view state but all view states of user because I have used route to get view state</li>


</ul>

## Structure of react app
<pre>
App |----- GroupByPriority (Route)
    |       |--- ForEachPriorityType (ColumnForBox)
    |                        |-- For list (Cards) 
    |----- GroupByUser (Route)
    |       |--- ForEachUser (ColumnForBox)
    |                        |-- For list (Cards) 
    |----- GroupByStaus (Route)
            |--- ForEachStatusType (ColumnForBox)
                             |-- For list (Cards) 
</pre>

## Screenshots of hosted application
![Screenshot of dashboard](/repo/a.png)
![Screenshot of dashboard](/repo/d.png)
![Screenshot of dashboard](/repo/e.png)
![Screenshot of dashboard](/repo/b.png)
![Screenshot of dashboard](/repo/c.png)
