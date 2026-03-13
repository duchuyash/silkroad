"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div style={styles.container}>
            <h1>Something went wrong</h1>
            <p>{error.message}</p>

            <button onClick={() => reset()} style={styles.button}>
                Try again
            </button>
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
    },
    button: {
        marginTop: "20px",
        padding: "10px 20px",
        cursor: "pointer",
    },
};