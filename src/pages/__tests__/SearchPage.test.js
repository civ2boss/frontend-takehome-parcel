import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import SearchPage from '../SearchPage';

test('search loads results from Ruby Gems API', async () => {
  const favorites = [];
  const setFavorites = () => {};
  const fakeSearchResponse = [
    {
      documentation_uri: 'https://api.rubyonrails.org/v6.0.1/',
      metadata: {
        documentation_uri: 'https://api.rubyonrails.org/v6.0.1/',
        bug_tracker_uri: 'https://github.com/rails/rails/issues',
        mailing_list_uri:
          'https://groups.google.com/forum/#!forum/rubyonrails-talk',
        source_code_uri: 'https://github.com/rails/rails/tree/v6.0.1',
      },
      homepage_uri: 'https://rubyonrails.org',
      bug_tracker_uri: 'https://github.com/rails/rails/issues',
      project_uri: 'https://rubygems.org/gems/rails',
      version: '6.0.1',
      sha: '87c242b5dbac85026ef3fe1278a51bee6d81913fb631465c4bfee2e8e8759ec8',
      platform: 'ruby',
      changelog_uri: null,
      source_code_uri: 'https://github.com/rails/rails/tree/v6.0.1',
      licenses: ['MIT'],
      gem_uri: 'https://rubygems.org/gems/rails-6.0.1.gem',
      downloads: 200415172,
      mailing_list_uri:
        'https://groups.google.com/forum/#!forum/rubyonrails-talk',
      name: 'rails',
      wiki_uri: null,
      version_downloads: 175843,
      authors: 'David Heinemeier Hansson',
      info:
        'Ruby on Rails is a full-stack web framework optimized for programmer happiness and sustainable productivity. It encourages beautiful code by favoring convention over configuration.',
    },
  ];

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeSearchResponse),
      status: 200,
    })
  );

  const { getByLabelText, getByText, getByTestId } = render(
    <SearchPage favorites={favorites} setFavorites={setFavorites} />
  );

  fireEvent.change(getByLabelText(/name/i), { target: { value: 'rails' } });
  fireEvent.click(getByText(/search gems/i));

  const searchResults = await waitForElement(() =>
    getByTestId(fakeSearchResponse[0].sha)
  );

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'http://localhost:3000/api/v1/search.json?query=rails'
  );

  expect(getByText('rails')).toBeInTheDocument();

  global.fetch.mockClear();
  delete global.fetch;
});
