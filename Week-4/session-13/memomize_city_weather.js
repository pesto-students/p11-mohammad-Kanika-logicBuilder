const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
  };
  
  function memomizeTemperatureForCity() {
    let cacheCityTemp = new Map();
  
    // Return an anonymous function that acts as a memoized temperature lookup
    return function (...args) {
      const key = args.toString();
  
      // Check if the temperature for the given city is already cached
      if (cacheCityTemp.has(key)) {
        return cacheCityTemp.get(key); // Retrieve and return the cached temperature
      }
  
      // If the temperature is not cached, retrieve it from the temperatureData object
      // Cache it in the map and return the temperature
      cacheCityTemp.set(key, temperatureData[args]);
      return cacheCityTemp.get(key);
    };
  }
  
  // Create a memoized temperature lookup function
  var getTemperatureForCity = memomizeTemperatureForCity();
  
  // Example usage
  const temperature1 = getTemperatureForCity('New York');
  console.log(temperature1); // 20
  
  const temperature2 = getTemperatureForCity('New York');
  console.log(temperature2); // 20 (retrieved from cache)
  
  const temperature3 = getTemperatureForCity('London');
  console.log(temperature3); // 18
  
  const temperature4 = getTemperatureForCity('London');
  console.log(temperature4); // 18 (retrieved from cache)



//   Memoization in JavaScript is based on the concept of closures.
// Closures are created when an inner function accesses variables from its outer lexical environment, even after the outer function has finished executing.
// Memoization involves creating a closure that retains a reference to a cache storage, such as an object or a map.
// The memomizeTemperatureForCity function creates a closure by returning an inner anonymous function.
// Inside the closure, there is a cacheCityTemp map that serves as the cache storage for memoized results.
// When the memoized function is called with a city argument, it checks if the temperature for that city is already stored in the cache.
// If the temperature is found in the cache (cacheCityTemp.has(key)), it is retrieved using cacheCityTemp.get(key) and returned. This avoids recomputing the temperature.
// If the temperature is not cached, it is retrieved from the temperatureData object using the city argument as the key (temperatureData[args]).
// The retrieved temperature is then stored in the cache using cacheCityTemp.set(key, temperatureData[args]).
// Finally, the cached temperature is returned.
// On subsequent calls with the same city argument, the memoized function checks the cache first and returns the temperature directly from the cache if it exists.
// This avoids recomputing the temperature for the same city, resulting in improved performance.