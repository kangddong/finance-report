import unittest
from scripts.sync_reports_to_dashboard import validate_schema

class TestSchemaValidation(unittest.TestCase):
    def test_valid_schema(self):
        data = {
            'REPORTS_HISTORY': [],
            'ANALYSIS_REPORTS': [],
            'COMPANY_DETAIL_LIBRARY': {}
        }
        self.assertTrue(validate_schema(data))

    def test_missing_keys_auto_initialize(self):
        data = {}
        validate_schema(data)
        self.assertIn('REPORTS_HISTORY', data)
        self.assertIn('ANALYSIS_REPORTS', data)
        self.assertIn('COMPANY_DETAIL_LIBRARY', data)
        self.assertEqual(data['REPORTS_HISTORY'], [])
        self.assertEqual(data['COMPANY_DETAIL_LIBRARY'], {})

    def test_invalid_type_raises_error(self):
        data = {
            'REPORTS_HISTORY': "Not a list"
        }
        with self.assertRaises(ValueError):
            validate_schema(data)

if __name__ == '__main__':
    unittest.main()
