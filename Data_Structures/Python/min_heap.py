from heapq import heappush, heappop, heapify

class MinHeap:

    def __init__(self):
        self.heap = []

    def parent(self, i):
        return (i - 1) / 2

    def insert_key(self, k):
        heappush(self.heap, k)

    def decrease_key(self, i, new_val):
        self.heap[i] = new_val 
        while(i != 0 and self.heap[self.parent(i)] > self.heap[i]):
            self.heap[i], self.heap[self.parent(i)] = (
                self.heap[self.parent(i)], self.heap[i]
            )

    def extract_min(self):
        return heappop(self.heap)

    def delete_key(self, i):
        self.decrease_key(i, float("-inf"))
        self.extract_min()

    def get_min(self):
        return self.heap[0]

heap_obj = MinHeap()
heap_obj.insert_key(3)
heap_obj.insert_key(2)
heap_obj.delete_key(1)
heap_obj.insert_key(15)
heap_obj.insert_key(5)
heap_obj.insert_key(4)
heap_obj.insert_key(45)
