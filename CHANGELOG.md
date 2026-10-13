# Changelog

## [0.3.0] - 13/10/2026

### Breaking
- Build: `vue` and `vuetify` are now `peerDependencies` and are no longer bundled. Consumers must install Vuetify (^3.9.0) and load its CSS themselves; `mango-vue` no longer imports `vuetify/dist/vuetify.min.css`

### Added
- Feature: New `MDropdownMenu` component (items, sections, activator and content slots, `v-model`), plus exported `DropdownItem` and `DropdownSection` types
- Feature: MTitleView accepts `dropdownItems` and `dropdownSections` props, emits `dropdown-item-click` and has an `actions` slot
- Feature: MButton accepts `text` (alias of `label`), `backgroundColor`, `textColor`, a default slot and declares the `click` emit
- Feature: MButton accepts `filled` / `icon` variants, `xs` / `xl` sizes, `before` / `after` icon positions and `danger` / `warning` / `success` colors
- Feature: New `--primary-light-variant` CSS variable

### Changed
- Style: MButton uses font weight 600 and 12px border radius; removed the unused uppercase class
- Style: MButton with `variant="icon"` or an icon without text renders as a Vuetify icon button

## [0.2.7] - 22/05/2025

### Added
- Feature: Added `stepsColumnWidth` prop to MFormSteps for customizable steps column width

### Fixed
- Bugfix: MFormSteps layout now maintains consistent column widths across steps, regardless of content or step changes

## [0.2.6] - 22/05/2025

### Fixed
- Bugfix: Fixed pagination centering in MDataTable when tables have many columns, preventing unnecessary table width expansion

## [0.2.5] - 08/05/2025

### Added
- Feature: Enhanced MDragNDropFile component with support for numerous file formats (PDF, DOCX, CSV, images, etc.)
- Feature: Improved CSV file validation with support for various MIME types
- Feature: Added robust validation for image file formats with type-specific restrictions
- Feature: Enhanced accept attribute in file input to properly filter files in the file selector dialog

### Fixed
- Bugfix: Improved error handling for empty file selections and drops
- Bugfix: Refactored code to eliminate validation logic duplication

### Changed
- Refactor: Code style consistency improvements in MDragNDropFile component
- Refactor: Reused validateFiles function across both single and multiple file modes

## [0.2.4] - 29/04/2025

### Added
- Feature: Enhanced MDragNDropFile component with multiple file upload support
- Feature: Backward compatibility for MDragNDropFile to ensure existing implementations continue to work
- Feature: File removal capability for multiple file uploads in MDragNDropFile
- Feature: Added example implementations demonstrating both single and multiple file uploads

## [0.2.3] - 03/03/2025

### Fixed
- Bugfix: Improved text wrapping in MDataTable headers and cells to handle both long words and phrases properly
- Bugfix: Fixed header and cell content display to prevent text overflow and ensure proper content visibility

## [0.2.2] - 03/02/2025

### Added
- Feature: Added support for comparison values display in KPIChartCard component
- Feature: Added formatSymbol prop to KPIChartCard component for displaying units (%, €, etc.) next to values

## [0.2.1] - 23/01/2025

### Added
- Feature: Implement functionality to allow a customizable message in MDataTable when no data is available
- Feature: Added prop to disable MInputField component, preventing user interactions

### Fixed
- Bugfix: Break-word and fixed width of columns with horizontal scroll in MDataTable
- Bugfix: Apex chart height and width options are now directly passed as a prop to the apex chart component for proper working
- Bugfix: Data Table pagination style when many pages fixed, now it is more readable
- Bugfix: MInputField selector type now returns v-model to the parent

## [0.2.0] - 22-11-2024

### Added
- Feature: Enhanced KPI area chart styling for improved visual presentation
- Feature: Improved selector input field component with better user interaction
- Feature: Added formatSymbol prop to KPIChartCard component for displaying units (%, €, etc.) next to values

### Fixed
- Bugfix: Resolved filters not being visually outstanding when selected
- Bugfix: Fixed virtual data tables slots rendering issues

## [0.1.9] - 30-09-2024

### Added
- Feature: Unit testing implemented for some components
- Feature: New component "KPI Chart"
- Feature: Enhanced app bar styles on MAppBar for better selected tab visibility
- Feature: Added infinite scroll for MDataTable component
- Feature: Implemented a prop for resetting the page counter from the parent on MDataTable component

### Fixed
- Bugfix: Fixed word wrapping and breaking in table headers

