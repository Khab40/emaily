function localtunnel {
  lt -s alexeykhabalov --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done