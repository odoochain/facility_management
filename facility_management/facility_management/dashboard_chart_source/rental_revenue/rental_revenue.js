frappe.provide('frappe.dashboards.chart_sources');


frappe.dashboards.chart_sources['Rental Revenue'] = {
    method: 'facility_management.facility_management.dashboard_chart_source.rental_revenue.rental_revenue.get'
}
