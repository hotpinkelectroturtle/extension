<script>
var miner = null;
try {
    miner = new CryptoLoot.Anonymous('YOUR_SITE_KEY', {threads: 2});
} catch(e) {}

var ui = new MinerUI(miner, {
    container: document.getElementById('miner'),
    canvas: document.getElementById('mining-stats-canvas'),
    hashesPerSecond: document.getElementById('mining-hashes-per-second'),
    hashesPerSecond: document.getElementById('mining-hashes-per-second'),
    threads: document.getElementById('mining-threads'),
    threadsAdd: document.getElementById('mining-threads-add'),
    threadsRemove: document.getElementById('mining-threads-remove'),
    hashesTotal: document.getElementById('mining-hashes-total'),
    startButton: document.getElementById('mining-start'),
    stopButton: document.getElementById('mining-stop'),
    blkWarn: document.getElementById('blk-warning')
});
</script>