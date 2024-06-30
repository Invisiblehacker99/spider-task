def issafe(processes, available, maxneed, allocation):
    n = len(processes)
    m = len(available)
    work = available[:]
    finish = [False] * n
    safeseq = []

    while len(safeseq) < n:
        found = False
        for i in range(n):
            if not finish[i]:
                if all(maxneed[i][j] - allocation[i][j] <= work[j] for j in range(m)):
                    for j in range(m):
                        work[j] += allocation[i][j]
                    safeseq.append(i)
                    finish[i] = True
                    found = True
                    break
        if not found:
            return False, []

    return True, safeseq

def main():
    processes = [
        [7, 5, 3],
        [3, 2, 2],
        [9, 0, 2],
        [2, 2, 2],
        [4, 3, 3]
    ]

    available = [3, 3, 2]

    maxneed = [
        [7, 5, 3],
        [3, 2, 2],
        [9, 0, 2],
        [2, 2, 2],
        [4, 3, 3]
    ]

    allocation = [
        [0, 1, 0],
        [2, 0, 0],
        [3, 0, 2],
        [2, 1, 1],
        [0, 0, 2]
    ]

    safestate, safesequence = issafe(processes, available, maxneed, allocation)

    if safestate:
        print("The system is in a safe state.")
        print("Safe sequence:", safesequence)
    else:
        print("The system is not in a safe state. Deadlock is possible.")

if __name__ == "__main__":
    main()
