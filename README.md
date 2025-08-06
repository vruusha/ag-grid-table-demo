# FalconX Data Grid - Frontend Development Assignment

A modern, responsive data grid application built with React, TypeScript, and AG Grid for the FalconX Frontend Development Assignment.

## 🚀 Features

### Core Functionality
- **Advanced Data Grid**: Built with AG Grid for powerful data management
- **Sorting & Filtering**: Multi-column sorting and advanced filtering capabilities
- **Pagination**: Infinite Scroll
- **Row Selection**: Singlerow selection with visual feedback
- **Export Functionality**: CSV export for selected or all data
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Action Menu**: Overflow menu column with dropdown options per row

### User Experience
- **Modern UI**: Clean, professional design with smooth animations
- **Real-time Search**: Global search across all columns
- **Status Indicators**: Visual status badges for active/inactive records
- **Loading States**: Skeleton loaders and loading spinners
- **Selection Summary**: Real-time display of selected items

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Virtual scrolling for large datasets
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Error Handling**: Graceful error states and user feedback
- **Modular Architecture**: Reusable components and utilities

## 📋 Requirements

- Node.js 16+ 
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd falconx-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🖥️ Backend: Mocked API Service

A Python FastAPI backend is provided in the `backend` folder to mock order data for frontend development and testing.

### Setup

1. **Create a Virtual Environment (Recommended)**
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate
   ```

2. **Install Dependencies**
   ```bash
   pip install fastapi uvicorn pandas numpy
   ```

### Running the Backend

Start the FastAPI server using Uvicorn:
```bash
uvicorn main:app --reload
```
By default, this runs on [http://localhost:8000](http://localhost:8000).

### API Endpoints

- `/api/orders`  
  Returns mocked order data with nested children for grid consumption.

### Notes

- CORS is enabled for all origins to allow frontend requests.
- The backend generates random order data every time it starts.
- You can adjust the number of records or mock logic in `main.py`.

---

## 🏗️ Project Structure

```
ag-grid-table-demo/
├── backend/              # Python FastAPI backend (mocked API)
├── public/               # Static frontend assets
├── src/                  # React source code
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
``` 

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- **Desktop**: Full-featured grid with all capabilities
- **Tablet**: Optimized layout with touch-friendly interactions
- **Mobile**: Simplified view with essential features

## 🔄 State Management

The application uses React hooks for state management:

- **Data State**: Grid data and loading states
- **Selection State**: Selected rows and selection summary
- **Filter State**: Search and filter conditions
- **UI State**: Loading, error, and interaction states

## 📈 Performance Optimizations

- **Virtual Scrolling**: Efficient rendering of large datasets
- **Memoization**: Optimized re-renders with useMemo
- **Memory Management**: Proper cleanup and memory optimization


## TODO
- **Tests**
  
## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is created for the FalconX Frontend Development Assignment.

## 🙏 Acknowledgments

- AG Grid for the powerful data grid component
- React team for the excellent framework
- Create React App for the development setup
