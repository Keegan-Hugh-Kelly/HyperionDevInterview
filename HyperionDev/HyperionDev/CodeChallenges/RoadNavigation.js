//Road Navigation
// By: @KeeganHughKelly, Monday 17th April 2023

// Notes:
    // If two paths have the same distance, it doesn't matter which one you return (which won't happen in the tests).
    // Make sure to include the starting and ending nodes in the path.
    // The order of the path array does matter.
    // Distance between 2 nodes is located in the metadata.distance property of the edge connecting them.
    // Use road.json for the graph input (it's a JSON file, so you'll need to parse it).

function navigate(graph, start, end) {
    
}

navigate(road, 2, 0) // { "distance": 5, "path": [2, 4, 0] }
navigate(road, 0, 2) // { "distance": 5, "path": [0, 4, 2] }
navigate(road, 0, 3) // { "distance": 9, "path": [0, 4, 2, 3] }
navigate(road, 0, 4) // { "distance": 4, "path": [0, 4] }
navigate(road, 0, 5) // { "distance": 13, "path": [0, 4, 2, 3, 5] }
navigate(road, 0, 6) // { "distance": 14, "path": [0, 4, 2, 3, 5, 6] }
navigate(road, 0, 7) // { "distance": 18, "path": [0, 4, 2, 3, 5, 6, 7] }
navigate(road, 0, 8) // { "distance": 19, "path": [0, 4, 2, 3, 5, 6, 7, 8] }
navigate(road, 0, 9) // { "distance": 21, "path": [0, 4, 2, 3, 5, 6, 7, 8, 9] }