#include <iostream>
#include <fstream>

using namespace std;

int main() {
    ifstream inputFile("input.txt");
    int num1, num2;
    
    // Read input numbers from the file
    inputFile >> num1 >> num2;
    
    // Close the input file
    inputFile.close();
    
    // Perform addition
    int sum = num1 + num2;
    
    // Open output file for writing
    ofstream outputFile("output.txt");
    
    // Write result to output file
    outputFile << "The sum of " << num1 << " and " << num2 << " is: " << sum << endl;
    
    // Close the output file
    outputFile.close();
    
    return 0;
}
