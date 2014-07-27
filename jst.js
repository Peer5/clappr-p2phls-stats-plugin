//This file is generated by bin/hook.js
var _ = require('underscore');
module.exports = {

  'p2phlsstats': _.template('<p>bemtv p2p/hls stats</p><span>status: <span class="stats-status"><%= status %></span></span><span>chunks from CDN: <%= chunksFromCDN %></span><span>chunks from p2p: <%= chunksFromP2P %></span><span>chunks sent: <%= chunksSent %></span><span>swarm size: <%= swarmSize %></span><span>bitrate: <%= currentBitrate %> kb</span><span>state: <%= state %></span><span>dropped frames: <%= dframes %></span>'),

  CSS: {
    
      'p2phlsstats': '@font-face{font-family:StatsFont;src:url(assets/visitor.ttf) format("truetype")}.p2phlsstats[data-p2phlsstats]{font-family:StatsFont;position:absolute;text-align:left;z-index:3001;top:20px;left:20px;font-smooth:never;-webkit-font-smoothing:none;background-color:rgba(0,0,0,.7);color:#fff;border-radius:3px;width:155px;height:140px;padding-top:11px;font-size:10px;padding-left:5px}.p2phlsstats[data-p2phlsstats] p{color:#fff;text-align:center;margin-bottom:5px}.p2phlsstats[data-p2phlsstats] span{color:#fff;display:block;text-align:left;margin-bottom:3px;line-height:1em}.p2phlsstats[data-p2phlsstats] span.stats-status{display:inline}',
    
  }
};
