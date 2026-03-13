export default function Loading() {
    return (
        <div style={styles.container}>
            <div style={styles.spinner}></div>
            <p style={styles.text}>Loading map...</p>
        </div>
    );
}

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "center",
        alignItems: "center",
        background: "#f9f9f9",
    },
    spinner: {
        width: "60px",
        height: "60px",
        border: "6px solid #eee",
        borderTop: "6px solid #3b82f6",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
    },
    text: {
        marginTop: "15px",
        color: "#666",
        fontSize: "16px",
    },
};