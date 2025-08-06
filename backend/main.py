from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import numpy as np
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

num_rows = 500
mock_data = pd.DataFrame({
    "id": [f"ORD-{i:04d}" for i in range(num_rows)],
    "name": np.random.choice(["AAPL", "GOOG", "MSFT", "TSLA"], size=num_rows),
    "type": np.random.choice(["Limit", "Market", "Stop"], size=num_rows),
    "side": np.random.choice(["BUY", "SELL"], size=num_rows),
    "status": np.random.choice(["new", "rejected", "pending", "filled"], size=num_rows),
    "tif": np.random.choice(["GTC", "FOK", "IOC"], size=num_rows),
    "orderQty": np.random.randint(1, 100, size=num_rows),
    "filledQty": np.random.randint(0, 100, size=num_rows),
    "price": np.round(np.random.uniform(100, 1000, size=num_rows), 2),
    "exchange": np.random.choice(["NYSE", "NASDAQ", "LSE"], size=num_rows),
    "time": pd.date_range("2025-01-01", periods=num_rows, freq="min").astype(str)
})

@app.get("/api/orders")
def get_orders(start: int = 0, end: int = 50):
    rows = mock_data.iloc[start:end].to_dict(orient="records")

    for row in rows:
        num_children = random.randint(1, 3)
        row_id = row["id"]
        row["children"] = [
            {
                **row,  # copy all parent fields
                "id": f"{row_id}-C{i+1}",  # overwrite ID
                "filledQty": int(row["filledQty"] * random.uniform(0.2, 0.9)),
                "children":[] # optionally update field
            }
            for i in range(num_children)
        ]

    return JSONResponse(content={"rows": rows, "totalCount": len(mock_data)})