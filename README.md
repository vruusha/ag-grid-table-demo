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

## 🏗️ Project Structure

```
falconx-project/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── DataGrid.tsx   # Main AG Grid component
│   │   └── DataGrid.css   # Grid-specific styles
│   ├── utils/             # Utility functions
│   │   └── sampleData.ts  # Sample data generator
│   ├── App.tsx           # Main application component
│   ├── App.css           # Application styles
│   └── index.tsx         # Application entry point
├── DESIGN_SPECS.md       # Detailed design specifications
└── README.md            # Project documentation
```

## 🎨 Design Specifications

The application follows a comprehensive design specification that includes:

### Layout Structure
- **Header Section**: Gradient background with application title
- **Main Content Area**: Data grid with controls and pagination
- **Selection Summary**: Real-time display of selected items
- **Responsive Layout**: Adapts to different screen sizes

### Data Grid Features
- **Column Management**: Resizable, reorderable, and hideable columns
- **Advanced Filtering**: Column-specific filters with floating filter inputs
- **Sorting**: Multi-column sorting with visual indicators
- **Pagination**: Configurable page sizes (10, 20, 50, 100)
- **Export**: CSV export with selection support

### Visual Design
- **Color Scheme**: Professional blue gradient with neutral grays
- **Typography**: System fonts for optimal readability
- **Spacing**: Consistent padding and margins
- **Animations**: Smooth transitions and hover effects

## 🔧 Configuration

### AG Grid Configuration
The DataGrid component is highly configurable:

```typescript
<DataGrid
  data={data}
  onRowSelection={handleRowSelection}
  onExport={handleExport}
/>
```

### Column Definitions
Columns are defined with full customization options:

```typescript
const columnDefs = [
  {
    headerName: 'ID',
    field: 'id',
    sortable: true,
    filter: true,
    width: 100,
    checkboxSelection: true,
  },
  // ... more columns
];
```

## 📊 Sample Data

The application includes a comprehensive sample data generator that creates realistic employee records with:

- **Employee IDs**: Unique identifiers (EMP0001, EMP0002, etc.)
- **Names**: Realistic first and last names
- **Email Addresses**: Properly formatted email addresses
- **Status**: Active/Inactive status with visual badges
- **Roles**: Various job titles and positions
- **Departments**: Different organizational departments
- **Last Login**: Recent login timestamps

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🧪 Testing

The application is designed with testing in mind:

- **Unit Tests**: Component functionality testing
- **Integration Tests**: Grid interactions and data flow
- **E2E Tests**: Complete user workflow testing
- **Performance Tests**: Large dataset handling

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- **Desktop**: Full-featured grid with all capabilities
- **Tablet**: Optimized layout with touch-friendly interactions
- **Mobile**: Simplified view with essential features

## ♿ Accessibility

Built with accessibility in mind:

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: ARIA labels and semantic HTML
- **High Contrast**: Support for high contrast mode
- **Focus Management**: Proper focus indicators

## 🔄 State Management

The application uses React hooks for state management:

- **Data State**: Grid data and loading states
- **Selection State**: Selected rows and selection summary
- **Filter State**: Search and filter conditions
- **UI State**: Loading, error, and interaction states

## 📈 Performance Optimizations

- **Virtual Scrolling**: Efficient rendering of large datasets
- **Memoization**: Optimized re-renders with useMemo
- **Lazy Loading**: Data loading with loading states
- **Memory Management**: Proper cleanup and memory optimization

## 🎯 Success Criteria

All implementation goals have been met:

- ✅ Grid displays data correctly
- ✅ Sorting works on all columns
- ✅ Filtering functions properly
- ✅ Pagination handles large datasets
- ✅ Export functionality works
- ✅ Responsive design implemented
- ✅ Accessibility requirements met
- ✅ Performance optimized for large datasets
- ✅ Error states handled gracefully
- ✅ Code is well-documented and tested

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
