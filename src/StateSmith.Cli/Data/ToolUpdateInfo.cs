using System;

namespace StateSmith.Cli.Data;

/// <summary>
/// This file is stored in json format.
/// </summary>
public class ToolUpdateInfo
{
    public string LastCheckDateTime { get; set; } = "2021-09-01T00:00:00Z";

    public double GetMsSinceLastCheck()
    {
        var lastCheck = DateTime.Parse(LastCheckDateTime);
        var now = DateTime.Now;
        return (now - lastCheck).TotalMilliseconds;
    }
}
