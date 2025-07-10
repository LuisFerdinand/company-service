import DropdownFilter from "./DropdownFilter";
import {
  CATEGORY_OPTIONS,
  TECHNOLOGY_OPTIONS,
  INDUSTRY_OPTIONS,
  FEATURED_OPTIONS,
} from "../constants";

const FilterBar = ({ filters, setFilters }) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
      <div className="flex flex-wrap gap-4">
        <DropdownFilter
          label="Category"
          options={CATEGORY_OPTIONS}
          value={filters.category}
          onChange={(val) => setFilters({ ...filters, category: val })}
        />
        <DropdownFilter
          label="Technology"
          options={TECHNOLOGY_OPTIONS}
          value={filters.technology}
          onChange={(val) => setFilters({ ...filters, technology: val })}
        />
        <DropdownFilter
          label="Industry"
          options={INDUSTRY_OPTIONS}
          value={filters.industry}
          onChange={(val) => setFilters({ ...filters, industry: val })}
        />
      </div>

      <div className="flex">
        <DropdownFilter
          label="Featured"
          options={FEATURED_OPTIONS}
          value={filters.featured}
          onChange={(val) => setFilters({ ...filters, featured: val })}
        />
      </div>
    </div>
  );
};

export default FilterBar;
