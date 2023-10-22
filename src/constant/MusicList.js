//한국
const API_URLS = {
  한국팝: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX9tPFwDMOaN1/tracks',
  한국팝1: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWT9uTRZAYj0c/tracks',
  한국발라드:
    'https://api.spotify.com/v1/playlists/6RTgVhcAuIRwUFS9n3G2uf/tracks',
  한국발라드1:
    'https://api.spotify.com/v1/playlists/31nsm7j34JisRZPst85KWb/tracks',
  한국랩: 'https://api.spotify.com/v1/playlists/5PxxHwPDyvszco4mfrRmjc/tracks',
  한국랩1: 'https://api.spotify.com/v1/playlists/1x2RF61UgiXlRW6ulsDdxv/tracks',
  한국락: 'https://api.spotify.com/v1/playlists/4ZmGi53mqdkWAtunUu27TJ/tracks',
  한국락1: 'https://api.spotify.com/v1/playlists/5O6baCuRs0FAefieFpX5qG/tracks',
  한국알앤비:
    'https://api.spotify.com/v1/playlists/0s90AWqlFx2Nj5bcru8c0z/tracks',
  한국알앤비1:
    'https://api.spotify.com/v1/playlists/5PGPJ5UMVsA4EUoO50Rpqe/tracks',
  한국트로트:
    'https://api.spotify.com/v1/playlists/1EoXwjZ1AxoByi9xfKg9ZC/tracks',
  한국트로트1:
    'https://api.spotify.com/v1/playlists/6BVrFnTQVVmTSAi3cLAPUl/tracks',
  한국댄스:
    'https://api.spotify.com/v1/playlists/71Wyu36oVJaRwnX7NQhGIe/tracks',
  한국댄스1:
    'https://api.spotify.com/v1/playlists/2MlsYqBrtrsZczJC4MyIqw/tracks',
  한국재즈:
    'https://api.spotify.com/v1/playlists/1BTDLpDKkZFdmpujGi9DXf/tracks',
  한국재즈1:
    'https://api.spotify.com/v1/playlists/4rJTduMxNl9yi71qIfja4u/tracks',
  한국7080:
    'https://api.spotify.com/v1/playlists/6m26aacDgKWgbtedsbVCHc/tracks',
  한국70801:
    'https://api.spotify.com/v1/playlists/2kLSaGWVulVeB4cS0W5gKK/tracks',

  //미국

  미국팝: 'https://api.spotify.com/v1/playlists/7KUBkg0P6QTJtJaySQKw4C/tracks',
  미국팝1: 'https://api.spotify.com/v1/playlists/4XpUxR02p0as9EhvjuwQkk/tracks',
  미국발라드:
    'https://api.spotify.com/v1/playlists/4VA1h3g8h90d7QtmEjknZ0/tracks',
  미국발라드1:
    'https://api.spotify.com/v1/playlists/1FXntU5FkkTw1FchUZA1KY/tracks',
  미국랩: 'https://api.spotify.com/v1/playlists/3yccz7AcXmy5iB7alG105j/tracks',
  미국랩1: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX3ORvAIr1RbU/tracks',
  미국재즈:
    'https://api.spotify.com/v1/playlists/1fCWDmFG7N4rv1PyAshXgf/tracks',
  미국재즈1:
    'https://api.spotify.com/v1/playlists/37i9dQZF1DWTsUzn4pp2rW/tracks',
  미국락: 'https://api.spotify.com/v1/playlists/37i9dQZF1EQpj7X7UK8OOF/tracks',
  미국락1: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX3oM43CtKnRV/tracks',
  미국알앤비:
    'https://api.spotify.com/v1/playlists/37i9dQZF1EQoqCH7BwIYb7/tracks',
  미국알앤비1:
    'https://api.spotify.com/v1/playlists/37i9dQZF1DX6VDO8a6cQME/tracks',
  미국7080:
    'https://api.spotify.com/v1/playlists/3j06WBKo9vpQJZGkuQGfaZ/tracks',
  미국70801:
    'https://api.spotify.com/v1/playlists/27LXgC5xD1s1vpB7E0pA3W/tracks',
  미국댄스:
    'https://api.spotify.com/v1/playlists/6PGn00bR7MaK1nKCucbbi3/tracks',
  미국댄스1:
    'https://api.spotify.com/v1/playlists/2XGWSTEZvHL7URhDKC3iHC/tracks',
  미국트로트:
    'https://api.spotify.com/v1/playlists/37i9dQZF1EQmPV0vrce2QZ/tracks',
  미국트로트:
    'https://api.spotify.com/v1/playlists/517HA9An6EThLa7ovm1w8m/tracks',

  //일본

  일본팝: 'https://api.spotify.com/v1/playlists/7kZ9P3CU9DRN4F7t1YPcn4/tracks',
  일본랩: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXdbRLJPSmnyq/tracks',
  일본발라드:
    'https://api.spotify.com/v1/playlists/0iJ2y2N73ezuduf3vxG9Tm/tracks',
  일본재즈:
    'https://api.spotify.com/v1/playlists/3EUco5nbEWHz9QnN3UniQj/tracks',
  일본락: 'https://api.spotify.com/v1/playlists/1q6LxkPjDqKz74oEj39PSH/tracks',
  일본알앤비:
    'https://api.spotify.com/v1/playlists/46RD6WnfvcIMxfjLQseszv/tracks',
  일본7080:
    'https://api.spotify.com/v1/playlists/4fFuyz8cO2gakSk8G133yM/tracks',
  일본트로트:
    'https://api.spotify.com/v1/playlists/0fnK9Z9kL4fODehXxntJNo/tracks',
  일본댄스:
    'https://api.spotify.com/v1/playlists/37i9dQZF1DXdbRLJPSmnyq/tracks',
  일본팝1: 'https://api.spotify.com/v1/playlists/7kZ9P3CU9DRN4F7t1YPcn4/tracks',
  일본랩1: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXdbRLJPSmnyq/tracks',
  일본발라드1:
    'https://api.spotify.com/v1/playlists/0iJ2y2N73ezuduf3vxG9Tm/tracks',
  일본재즈1:
    'https://api.spotify.com/v1/playlists/3EUco5nbEWHz9QnN3UniQj/tracks',
  일본락1: 'https://api.spotify.com/v1/playlists/1q6LxkPjDqKz74oEj39PSH/tracks',
  일본알앤비1:
    'https://api.spotify.com/v1/playlists/46RD6WnfvcIMxfjLQseszv/tracks',
  일본70801:
    'https://api.spotify.com/v1/playlists/4fFuyz8cO2gakSk8G133yM/tracks',
  일본트로트1:
    'https://api.spotify.com/v1/playlists/0fnK9Z9kL4fODehXxntJNo/tracks',
  일본댄스1:
    'https://api.spotify.com/v1/playlists/37i9dQZF1DXdbRLJPSmnyq/tracks',
};
export default API_URLS;
