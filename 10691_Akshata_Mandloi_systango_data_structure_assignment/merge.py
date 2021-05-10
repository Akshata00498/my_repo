# to run the code:- https://www.programiz.com/python-programming/online-compiler/

# importing module
import sys

# creating parent class for class mergeSort performing selection sort
class selectionSort:
    
    # creating empty array
    firstArray=[]
    def sortingArrayOne(self):
       
        print("performing selection sort......")
        size = int(input("enter the size of the array :-"))
        print("enter the value in array :-")

        # taking array elements from user
        for i in range(size):
            value = int(input(" "))
            self.firstArray.append(value)
        print("array before applying selection sort :- ",self.firstArray)

        # Traverse through all array elements
        for i in range(len(self.firstArray)):
            
            # Find the minimum element in remaining unsorted array
            min_idx = i
            for j in range(i+1, len(self.firstArray)):
                if self.firstArray[min_idx] > self.firstArray[j]:
                    min_idx = j
            
            # Swap the found minimum element with the first element 
            self.firstArray[i], self.firstArray[min_idx] = self.firstArray[min_idx], self.firstArray[i]

        # printing sorted array
        print ("Sorted array")
        for i in range(len(self.firstArray)):
            print(self.firstArray[i])

# creating parent class for child class merge sort to perform quick sort
class quickSort:

    # creating an empty array
    array = []

    # function to perform sorting 
    def sortingArraytwo(self):
        
        print("performing quick sort.....")
        size = int(input("enter the size of the array :- "))
        print("enter the value in array :- ")

        # taking array elements from user
        for i in range(size):
            Values = int(input(" "))
            self.array.append(Values)
        print("array before applying quick sort :- ",self.array)

        # partition function to break the array into parts
        def partition(array, start, end):

            # pivot variable
            pivot = self.array[start]      
            low = start + 1     
            high = end          

            while True:
                while low <= high and self.array[high] >= pivot:
                    high = high - 1

                while low <= high and self.array[low] <= pivot:
                    low = low + 1

                if low <= high:
                    self.array[low], self.array[high] = self.array[high], self.array[low]

                else:
                    break
            
            self.array[start], self.array[high] = self.array[high], self.array[start]
            return high


        
        def quick_sort(array, start, end):
            if start >= end:
                return

            p = partition(self.array, start, end)
            quick_sort(self.array, start, p-1)
            quick_sort(self.array, p+1, end)
        
        
        quick_sort(self.array, 0, len(self.array) - 1)
        print("array after applying quick sort :- ", self.array)        
        
# class to merge the selectionsort and quicksort in an array and then applying merge sort on it.
# and also inheriting the property of both parent classes selectionSort & quickSort
# basically implimenting multiple inheritance 
class mergeSort(selectionSort,quickSort):

    # creating array
    arrayThree = []

    # function that merge and sort both the array from selection sort and quick sort
    def mergingAndSortingArrayOneTwo(self):
        for values in self.firstArray:
            self.arrayThree.append(values)
        for items in self.array:
            self.arrayThree.append(items)

        print("after combining and before applying the merger sort array is :- ", self.arrayThree)

        def merge(arrayThree, l, m, r):
            n1 = m - l + 1
            n2 = r- m
  
            # create temp arrays
            L = [0] * (n1)
            R = [0] * (n2)
  
            # Copy data to temp arrays L[] and R[]
            for i in range(0 , n1):
                L[i] = self.arrayThree[l + i]
  
            for j in range(0 , n2):
                R[j] = self.arrayThree[m + 1 + j]
  
            # Merge the temp arrays back into arr[l..r]
            i = 0     # Initial index of first subarray
            j = 0     # Initial index of second subarray
            k = l     # Initial index of merged subarray
  
            while i < n1 and j < n2 :
                if L[i] <= R[j]:
                    self.arrayThree[k] = L[i]
                    i += 1
                else:
                    self.arrayThree[k] = R[j]
                    j += 1
                k += 1
  
            # Copy the remaining elements of L[], if there are any
            while i < n1:
                self.arrayThree[k] = L[i]
                i += 1
                k += 1
  
            # Copy the remaining elements of R[], if there are any
            while j < n2:
                self.arrayThree[k] = R[j]
                j += 1
                k += 1
  
            # l is for left index and r is right index of the sub-array of arr to be sorted
        def mergeSort(arrayThree,l,r):
            if l < r:
  
                # Same as (l+r)//2, but avoids overflow for
                # large l and h
                m = (l+(r-1))//2
  
                # Sort first and second halves
                mergeSort(self.arrayThree, l, m)
                mergeSort(self.arrayThree, m+1, r)
                merge(self.arrayThree, l, m, r)
  


        n = len(self.arrayThree)
  
        mergeSort(self.arrayThree,0,n-1)
        print ("after applying merge sort the array elements are:- ")
        for i in range(n):
            print ("%d" %self.arrayThree[i]),
        
# creationg object of child class and calling the functions of both parent classes
mergeSortobj = mergeSort()
mergeSortobj.sortingArrayOne()
mergeSortobj.sortingArraytwo()
mergeSortobj.mergingAndSortingArrayOneTwo()


    

