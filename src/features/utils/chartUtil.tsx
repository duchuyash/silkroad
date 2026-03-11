export function formatChart17(data: any[]) {
    return {
        labels: "data.map(i => i.month)",
        datasets: [
            {
                label: data.map(i => i.name),
                data: data.map(i => i.total)
            }
        ]
    };
}