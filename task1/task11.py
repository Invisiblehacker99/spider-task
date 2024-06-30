class Process:
    def __init__(self, pid, burst_time):
        self.pid = pid
        self.burst_time = burst_time

def waitingTimes(processes):
    n = len(processes)
    waiting = [0] * n

    for i in range(1, n):
        waiting[i] = waiting[i - 1] + processes[i - 1].burst_time

    return waiting

def turnaroundTimes(processes, waiting):
    n = len(processes)
    turnaround = [0] * n

   
    for i in range(n):
        turnaround[i] = waiting[i] + processes[i].burst_time

    return turnaround

def averageTimes(processes):
    n = len(processes)
    waiting = waitingTimes(processes)
    turnaround = turnaroundTimes(processes, waiting)

    avg_waiting = sum(waiting) / n
    avg_turnaround = sum(turnaround) / n

    return avg_waiting, avg_turnaround

def main():
    
    processes = [Process(1, 24), Process(2, 3), Process(3, 3)]

    avg_waiting, avg_turnaround = averageTimes(processes)

   
    print(f"Average Waiting Time: {avg_waiting:.2f}")
    print(f"Average Turnaround Time: {avg_turnaround:.2f}")

if __name__ == "__main__":
    main()
